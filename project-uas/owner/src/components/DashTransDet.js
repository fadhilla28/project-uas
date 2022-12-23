/* eslint-disable react/style-prop-object */
import React from "react";
import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

import Pd from "../assets/images/product-details-4.jpg";

export default function DashTransDet() {
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
                  <h2 className="dashboard-title">#STORE0839</h2>
                  <p className="dashboard-subtitle">Transaction Details</p>
                </div>
                <div className="dashboard-content" id="transactionDetails">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-12 col-md-4">
                              <img src={Pd} alt="" className="w-100 mb-3" />
                            </div>
                            <div className="col-12 col-md-8">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Customer Name
                                  </div>
                                  <div className="product-subtitle">
                                    Angga Risky
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Product Name
                                  </div>
                                  <div className="product-subtitle">
                                    Paket Indomie
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Date of Transaction
                                  </div>
                                  <div className="product-subtitle">
                                    12 Oktober, 2022
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Total Amount
                                  </div>
                                  <div className="product-subtitle">
                                    Rp. 166000
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Mobile Phone
                                  </div>
                                  <div className="product-subtitle">
                                    +628 2020 11111
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mt-4">
                              <h5>Address Informations</h5>
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="product-title">Address 1</div>
                                  <div className="product-subtitle">
                                    Setra Duta Cemara
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">Address 2</div>
                                  <div className="product-subtitle">
                                    Blok B2 No. 34
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">Province</div>
                                  <div className="product-subtitle">
                                    West Java
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">City</div>
                                  <div className="product-subtitle">
                                    Bandung
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">
                                    Postal Code
                                  </div>
                                  <div className="product-subtitle">123999</div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="product-title">Country</div>
                                  <div className="product-subtitle">
                                    Indonesia
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="product-title">
                                        Status
                                      </div>
                                      <select
                                        name="status"
                                        id="status"
                                        className="form-control"
                                        v-model="status"
                                      >
                                        <option value="UNPAID">Unpaid</option>
                                        <option value="PROCESS">Process</option>
                                        <option value="SUCCESS">Success</option>
                                      </select>
                                    </div>
                                    <div
                                      className="col-12"
                                      //   style="margin-top: 10px"
                                    >
                                      <input
                                        type="submit"
                                        className="btn btn-success btn-block px-5"
                                        value="Save Now"
                                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
