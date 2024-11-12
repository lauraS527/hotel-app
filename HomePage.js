// pages/HomePage.js
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";
import { searchHotels } from "../services/api";

function HomePage() {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async (criteria) => {
    const results = await searchHotels(criteria);
    setHotels(results);
  };

  return (
    <div>
      <h1>Buscar hoteles</h1>
      <SearchBar onSearch={handleSearch} />
      <HotelList hotels={hotels} />
    </div>
  );
}

export default HomePage;
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";
import { searchHotels } from "../services/api";

function HomePage() {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async (criteria) => {
    const results = await searchHotels(criteria);
    setHotels(results);
  };

  return (
    <div>
      <h1>Buscar hoteles</h1>
      <SearchBar onSearch={handleSearch} />
      <HotelList hotels={hotels} />
    </div>
  );
}

export default HomePage;
