import React, { useState } from "react";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <h2 className="navbar-brand ms-3" href="#">
        <strong>D-Express</strong>
      </h2>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Refill Presciption
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Buy Medicine
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact a Pharmacist
            </a>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-success me-2"
        style={{ borderRadius: "20px", height: "40px", width: "100px" }}
      >
        Login
      </button>
    </nav>
  );
};

export default AppNavbar;
