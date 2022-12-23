/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import User from "../assets/images/icon-user.png";
import Cart from "../assets/images/icon-cart-empty.svg";

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
                  src={User}
                  alt=""
                  className="rounded-circle mr-2 profile-picture"
                />
                Hi, Angga
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Back to Store
                </a>
                <a className="dropdown-item" href="/dashAcc">
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block mt-2" href="/cart">
                <img src={Cart} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
