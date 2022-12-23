/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Arrow from "../assets/images/dashboard-arrow-right.svg";
import NavDash from "../components/NavDash";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="page-dashboard">
        <div className="d-flex" id="wrapper" data-aos="fade-right">
          <Sidebar />

          <div id="page-content-wrapper">
            <NavDash />

            <div
              className="section-content section-dashboard-home"
              data-aos="fade-up"
            >
              <div className="container-fluid">
                <div className="dashboard-heading">
                  <h2 className="dashboard-title">Dashboard</h2>
                  <p className="dashboard-subtitle">
                    Look what you have made today!
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="row mt-3">
                    <div className="col-12 mt-2">
                      <h5 className="mb-3">Recent Transactions</h5>
                      <a
                        className="card card-list d-block"
                        href="/dashTransDet"
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">Paket Indomie</div>
                            <div className="col-md-3">Angga</div>
                            <div className="col-md-3">12 Oktober, 2022</div>
                            <div className="col-md-1 d-none d-md-block">
                              <img src={Arrow} alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
