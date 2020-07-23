import React from "react";
import "./App.css";
import Counter from "./Counter";
import Nav from "./Nav";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";
import About from "./About";
import Blog from "./Blog";
import BlogItem from "./BlogItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MovieProvider>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:id" component={BlogItem} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </MovieProvider>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
