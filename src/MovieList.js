import React, { useState, useContext } from "react";
import Movie from "./Movie.js";
import { MovieContext } from "./MovieContext";
import AddMovie from "./AddMovie.js";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <AddMovie />
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
