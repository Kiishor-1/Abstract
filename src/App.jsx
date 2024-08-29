import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateCard from "./components/CreateCard";
import Home from './pages/Home';
import { Toaster } from "react-hot-toast";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative">
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route 
          path="/" 
          element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} 
        />
        <Route path="/create-card" element={<CreateCard />} />
      </Routes>
    </div>
  );
}

export default App;


