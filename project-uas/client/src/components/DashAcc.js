import React from "react";
import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

export default function DashAcc() {
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
                  <h2 className="dashboard-title">My Account</h2>
                  <p className="dashboard-subtitle">
                    Update your current profile
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="row">
                    <div className="col-12">
                      <form action="">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-2">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="name">Your Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    name="name"
                                    value="Angga"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="email">Your Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value="email@gmail.com"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="addressOne">Address 1</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="addressOne"
                                    aria-describedby="emailHelp"
                                    name="addressOne"
                                    value="Setra Duta Cemara"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="addressTwo">Address 2</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="addressTwo"
                                    aria-describedby="emailHelp"
                                    name="addressTwo"
                                    value="Blok B2 No. 34"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label for="province">Province</label>
                                  <select
                                    name="province"
                                    id="province"
                                    className="form-control"
                                  >
                                    <option value="West Java">West Java</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label for="city">City</label>
                                  <select
                                    name="city"
                                    id="city"
                                    className="form-control"
                                  >
                                    <option value="Bandung">Bandung</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label for="postalCode">Postal Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="postalCode"
                                    name="postalCode"
                                    value="40512"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="country">Country</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value="Indonesia"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="mobile">Mobile</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    value="+628 2020 11111"
                                  />
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
