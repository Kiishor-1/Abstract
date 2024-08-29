import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { toast } from "react-hot-toast";
import { CARD_ENDPOINTS } from "../services/api";

const { FETCH_ALL_CARDS } = CARD_ENDPOINTS;

export default function Main({ searchTerm }) {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(FETCH_ALL_CARDS);
        setCardData(response.data.data);
        setFilteredData(response.data.data);
      } catch (err) {
        toast.error("Failed to fetch cards. Please try again later.");
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = cardData.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cardData);
    }
  }, [searchTerm, cardData]);

  const renderSkeletonLoader = () => {
    return (
      <div className="w-full py-12 mx-auto flex flex-wrap gap-10 justify-center">
        {Array(4).fill().map((_, idx) => (
          <div key={idx} className="w-64 h-40 rounded-lg bg-gray-200 animate-pulse"></div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="py-12 w-full mx-auto flex flex-wrap gap-10 justify-center">
        {loading ? (
          renderSkeletonLoader()
        ) : filteredData.length > 0 ? (
          filteredData.map((card, id) => <Card card={card} key={id} />)
        ) : searchTerm ? (
          <div className="font-semibold min-h-[72px]">No Such Card available</div>
        ) : (
          <div className="font-semibold min-h-[72px]">No Data Found</div>
        )}
      </div>
    </div>
  );
}
