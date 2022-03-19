import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/Troll Face.svg";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarColor ">
      <div className="container">
        <img className="me-md-1  " src={logo} alt="" />
        <Link
          className="navbar-brand textColor fs-4 text-light  ms-md-3 fw-bold"
          to="/"
        >
          Meme Generator
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-primary"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light fw-bold"
                aria-current="page"
                to="api"
              >
                API
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light fw-bold"
                aria-current="page"
                to="forms "
              >
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light fw-bold"
                aria-current="page"
                to="jokes"
              >
                Jokes App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light fw-bold"
                aria-current="page"
                to="boxes"
              >
                Boxes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light fw-bold"
                aria-current="page"
                to="lorem"
              >
                Lorem Image
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light fw-bold"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                UseState Apps
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="todo">
                    To-Do
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="boolean">
                    Boolean
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="counter">
                    Counter App
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
