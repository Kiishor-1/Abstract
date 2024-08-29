import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Footer from '../components/Footer'

export default function Home({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <HeroSection onSearch={setSearchTerm} />
      <Main searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
}

