import React from "react";
import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

import Prod from "../assets/images/product-details-4.jpg";

export default function DashTransDet() {
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
                  <h2 class="dashboard-title">#STORE0839</h2>
                  <p class="dashboard-subtitle">Transaction Details</p>
                </div>
                <div class="dashboard-content" id="transactionDetails">
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-12 col-md-4">
                              <img src={Prod} alt="" class="w-100 mb-3" />
                            </div>
                            <div class="col-12 col-md-8">
                              <div class="row">
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Customer Name</div>
                                  <div class="product-subtitle">
                                    Angga Risky
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Product Name</div>
                                  <div class="product-subtitle">
                                    Paket Indomie
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">
                                    Date of Transaction
                                  </div>
                                  <div class="product-subtitle">
                                    12 Oktober, 2022
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Total Amount</div>
                                  <div class="product-subtitle">Rp. 166000</div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Mobile Phone</div>
                                  <div class="product-subtitle">
                                    +628 2020 11111
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 mt-4">
                              <h5>Address Informations</h5>
                              <div class="row">
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Address 1</div>
                                  <div class="product-subtitle">
                                    Setra Duta Cemara
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Address 2</div>
                                  <div class="product-subtitle">
                                    Blok B2 No. 34
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Province</div>
                                  <div class="product-subtitle">West Java</div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">City</div>
                                  <div class="product-subtitle">Bandung</div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Postal Code</div>
                                  <div class="product-subtitle">123999</div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="product-title">Country</div>
                                  <div class="product-subtitle">Indonesia</div>
                                </div>
                                <div class="col-12">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <div class="product-title">Status</div>
                                      {/* <select
                                      name="status"
                                      id="status"
                                      class="form-control"
                                      v-model="status"
                                    > */}
                                      <option value="UNPAID">Unpaid</option>
                                      {/* <option value="PENDING">Pending</option>
                                    <option value="SHIPPING">Shipping</option>
                                    <option value="SUCCESS">Success</option>
                                   </select> */}
                                    </div>
                                    <template v-if="status == 'SHIPPING'">
                                      <div class="col-md-3">
                                        <div class="product-title">
                                          Input Resi
                                        </div>
                                        <input
                                          class="form-control"
                                          type="text"
                                          name="resi"
                                          id="openStoreTrue"
                                          v-model="resi"
                                        />
                                      </div>
                                      <div class="col-md-2">
                                        <button
                                          type="submit"
                                          class="btn btn-success btn-block mt-4"
                                        >
                                          Update Resi
                                        </button>
                                      </div>
                                    </template>
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
