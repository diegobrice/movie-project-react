import React from "react";
import "./App.css";
import Counter from "./Counter";
import Nav from "./Nav";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie />
        <MovieList />
        <Counter />
      </div>
    </MovieProvider>
  );
}

export default App;
