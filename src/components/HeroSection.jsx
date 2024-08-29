import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <section className="bg-[#E6E6FA] h-[250px] flex flex-col items-center justify-center gap-6">
      <p className="lg:text-6xl text-4xl">How can we help?</p>
      <div className="flex items-center justify-between border border-slate-700 p-2 lg:w-[40%] w-[90%]">
        <input
          type="text"
          className="bg-transparent w-full outline-none h-full px-3"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput.length > 0 && <FaArrowRight onClick={handleSearch} className="cursor-pointer" />}
      </div>
    </section>
  );
}
