import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <li>
    <NavLink to= "/">Home</NavLink>
    <NavLink to= "/movies">Movies</NavLink>
    <NavLink to= "/directors">Directors</NavLink>
    <NavLink to= "/actors">Actors</NavLink>
    </li>
  </div>)
}

export default NavBar;
