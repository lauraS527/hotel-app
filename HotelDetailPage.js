import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelDetails } from "../services/api";
import { Typography, Box } from "@mui/material";

function HotelDetailPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotelDetails(id);
      setHotel(data);
    };
    fetchHotel();
  }, [id]);

  if (!hotel) return <div>Cargando...</div>;

  return (
    <Box>
      <Typography variant="h2">{hotel.nombre}</Typography>
      <Typography variant="subtitle1">{hotel.ubicacion}</Typography>
      <Typography variant="body1">{hotel.descripcion}</Typography>
      <Typography variant="h6">Precio: ${hotel.precio_noche} por noche</Typography>
      <img src={hotel.imagenes[0]} alt={hotel.nombre} style={{ width: "100%", height: "auto" }} />
    </Box>
  );
}

export default HotelDetailPage;
