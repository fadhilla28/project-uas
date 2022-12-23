import React from "react";

import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

import Arrow from "../assets/images/dashboard-arrow-right.svg";

export default function DashTrans() {
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
                  <h2 className="dashboard-title">Transactions</h2>
                  <p className="dashboard-subtitle">
                    Big result start from the small one
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="buy"
                      role="tabpanel"
                      aria-labelledby="buy-tab"
                    >
                      <div className="row mt-3">
                        <div className="col-12 mt-2">
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
        </div>
      </div>
    </>
  );
}
