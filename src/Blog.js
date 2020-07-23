import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("https://swapi.dev/api/people");
    const data = await res.json();
    console.log(data.results);
    setItems(data.results);
  };

  return (
    <div>
      <h1>Blog Page</h1>
      {items.map((item, index) => (
        <Link to={`/blog/${index + 1}`}>
          <li>{item.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
