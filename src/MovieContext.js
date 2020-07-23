import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$12",
      id: 22312,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 22313,
    },
    {
      name: "Inception",
      price: "$10",
      id: 22314,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
