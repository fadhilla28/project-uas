/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import IcTesti from "../assets/images/icon-testimonial-2.png";

export default function NavDash() {
  return (
    <>
      <nav
        className="navbar navbar-store navbar-expand-lg navbar-light fixed-top"
        data-aos="fade-down"
      >
        <button
          className="btn btn-secondary d-md-none mr-auto mr-2"
          id="menu-toggle"
        >
          &laquo; Menu
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-none d-lg-flex">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={IcTesti}
                  alt=""
                  className="rounded-circle mr-2 profile-picture"
                />
                Admin
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-block d-lg-none mt-3">
            <li className="nav-item">
              <a className="nav-link"> Admin </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block" href="/cart">
                {" "}
                Cart{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
