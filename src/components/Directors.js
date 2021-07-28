import React from "react";
import { directors } from "../data";

const style = {
  padding: "10px 20px", textAlign: "center", color: "white"
}

function Directors() {
  const items = directors.map((directors) => (
    <div key={directors.name}>
      <h1>Name: {directors.name}</h1>
      <p>Movies:</p>
      <ul>
      {directors.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1 style={style}>Directors Page</h1>
    {items}
  </div>
  );
}

export default Directors;
