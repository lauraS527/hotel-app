import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut });
  };

  return (
    <Box display="flex" gap={2}>
      <TextField
        label="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        label="Fecha de entrada"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <TextField
        label="Fecha de salida"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;
