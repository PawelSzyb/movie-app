import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary mb-3">
      <Link className="navbar-brand text-white" to="/">
        Movie-App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto font-weight-bold">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/comments">
              Comments
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
