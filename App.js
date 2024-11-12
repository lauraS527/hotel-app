import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelDetailPage from "./pages/HotelDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
