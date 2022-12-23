import React, { useEffect, useState } from "react";
import axios from "axios";
import NavDash from "./NavDash";
import Sidebar from "./Sidebar";

export default function DashProduct() {
  const serverHost = "http://localhost:5001";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(serverHost + "/detail").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  // membuat action untuk button hapus dan menghubungkan pada perintah penghapusan data pada server
  function hadleHapusClick(path) {
    const formData = new FormData();
    formData.append("path", path);
    axios.post(serverHost + "/product/delete", formData).then((res) => {
      setProducts(res.data);
    });
  }
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
                  <h2 className="dashboard-title">My Products</h2>
                  <p className="dashboard-subtitle">
                    Manage it well and get money
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="row">
                    <div className="col-12">
                      <a
                        href="/admin/dashProductsCre"
                        className="btn btn-success"
                      >
                        Add New Product
                      </a>
                    </div>
                  </div>
                  <div className="row mt-4">
                    {products.map((product) => {
                      return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                          <a
                            className="card card-dashboard-product d-block"
                            href="/admin/dashProductsDet"
                          >
                            <div className="card-body">
                              <img
                                src={serverHost + product.path}
                                alt=""
                                className="w-100 mb-2"
                              />
                              <div className="product-title">
                                {product.name}
                              </div>
                              <div className="product-category">
                                {product.owner}
                              </div>
                            </div>
                          </a>
                          <input
                            type={"button"}
                            value={"Hapus"}
                            onClick={(event) => {
                              hadleHapusClick(product.path);
                              console.log(product.path);
                            }}
                          />
                        </div>
                      );
                    })}
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
