import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ match }) => {
  const id = match.params.id;

  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const res = await fetch(`http://swapi.dev/api/people/${id}`);
    const data = await res.json();
    console.log(data);
    setItem(data);
  };

  return (
    <div>
      <h1>Blog Item</h1>
      <h2>Name: {item.name}</h2>
      <h2>Gender: {item.gender}</h2>
    </div>
  );
};

export default BlogItem;
