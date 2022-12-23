import React from "react";

import Logo from "../assets/images/dashboard-store-logo.svg";

export default function Sidebar() {
  return (
    <>
      <div className="border-right" id="sidebar-wrapper">
        <div className="sidebar-heading text-center">
          <img src={Logo} alt="" className="my-4" />
        </div>
        <div className="list-group list-group-flush">
          <a href="/" className="list-group-item list-group-item-action">
            Dashboard
          </a>
          <a
            href="/admin/dashProducts"
            className="list-group-item list-group-item-action"
          >
            My Products
          </a>
          <a
            href="/admin/dashTrans"
            className="list-group-item list-group-item-action"
          >
            Transactions
          </a>
          <a
            href="/admin/dashSet"
            className="list-group-item list-group-item-action"
          >
            Store Settings
          </a>
        </div>
      </div>
    </>
  );
}
