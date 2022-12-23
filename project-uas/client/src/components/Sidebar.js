import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/dashboard-store-logo.svg";

export default function Sidebar() {
  return (
    <>
      <div className="border-right" id="sidebar-wrapper">
        <div className="sidebar-heading text-center">
          <Link to=".." relative="path">
            <img src={Logo} alt="" className="my-4" />
          </Link>
        </div>
        <div className="list-group list-group-flush">
          <a
            href="/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </a>
          <a
            href="/dashTrans"
            className="list-group-item list-group-item-action"
          >
            Transactions
          </a>
          <a href="/dashAcc" className="list-group-item list-group-item-action">
            My Account
          </a>
        </div>
      </div>
    </>
  );
}
