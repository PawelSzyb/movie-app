import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary mb-3">
      <a className="navbar-brand text-white" href="#">
        Movie-App
      </a>
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
            <a className="nav-link text-white" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Comments
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
