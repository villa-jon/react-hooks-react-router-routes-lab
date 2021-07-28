import React from "react";
import { movies } from "../data";

function Movies() {
  const items = movies.map((movies) => (
    <div key={movies.title}>
      <h1>{movies.title}</h1>
      <p>Rumtime: {movies.time} min.</p>
      <ul>
      {movies.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    {items}
  </div>
  );
}

export default Movies;
