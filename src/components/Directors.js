import React from "react";
import { directors } from "../data";

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
    <h1>Directors Page</h1>
    {items}
  </div>
  );
}

export default Directors;
