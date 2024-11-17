import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex  gap-4 mt-8 mb-4
    place-content-evenly text-xl "
    >
      <NavLink to="/">Home</NavLink>

      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  );
};

export default Navbar;
