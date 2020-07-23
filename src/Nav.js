import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>MoviesAPP</h3>
      <p>List of Movies: {movies.length} </p>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movies">
          <li>Movies</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
