import React from "react";
import { actors } from "../data";

function Actors() {
  const items = actors.map((actors) => (
    <div key={actors.name}>
      <h1>Name: {actors.name}</h1>
      <p>Movies:</p>
      <ul>
         {actors.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Actors Page</h1>
    {items}
  </div>
  );
}

export default Actors;
