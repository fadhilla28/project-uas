import React from "react";
import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

export default function DashSett() {
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
                  <h2 className="dashboard-title">Store Settings</h2>
                  <p className="dashboard-subtitle">
                    Make store that profitable
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="row">
                    <div className="col-12">
                      <form action="">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="storeName">Store Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="storeName"
                                    aria-describedby="emailHelp"
                                    name="storeName"
                                    value="Warungin Aja"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="is_store_open">
                                    Store Status
                                  </label>
                                  <p className="text-muted">
                                    Apakah saat ini toko Anda buka?
                                  </p>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      className="custom-control-input"
                                      type="radio"
                                      name="is_store_open"
                                      id="openStoreTrue"
                                      value="true"
                                      checked
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="openStoreTrue"
                                    >
                                      Buka
                                    </label>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      className="custom-control-input"
                                      type="radio"
                                      name="is_store_open"
                                      id="openStoreFalse"
                                      value="false"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="openStoreFalse"
                                    >
                                      Tutup Sementara
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col text-right">
                                <button
                                  type="submit"
                                  className="btn btn-success px-5"
                                >
                                  Save Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
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
