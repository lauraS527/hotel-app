import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function HotelCard({ hotel }) {
  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={hotel.imagen}
        alt={hotel.nombre}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{hotel.nombre}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {hotel.ubicacion}
          </Typography>
          <Typography variant="body2">${hotel.precio_noche} por noche</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default HotelCard;
