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
              class="section-content section-dashboard-home"
              data-aos="fade-up"
            >
              <div class="container-fluid">
                <div class="dashboard-heading">
                  <h2 class="dashboard-title">Transactions</h2>
                  <p class="dashboard-subtitle">
                    Big result start from the small one
                  </p>
                </div>
                <div class="dashboard-content">
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="buy"
                      role="tabpanel"
                      aria-labelledby="buy-tab"
                    >
                      <div class="row mt-3">
                        <div class="col-12 mt-2">
                          <a
                            class="card card-list d-block"
                            href="/admin/dashTransDet"
                          >
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-4">Paket Indomie</div>
                                <div class="col-md-3">Angga</div>
                                <div class="col-md-3">12 Oktober, 20222</div>
                                <div class="col-md-1 d-none d-md-block">
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
