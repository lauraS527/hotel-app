import React from "react";
import HotelCard from "./HotelCard";

function HotelList({ hotels }) {
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
