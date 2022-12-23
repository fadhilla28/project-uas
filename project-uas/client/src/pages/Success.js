import React, { useEffect, useState } from "react";
import axios from "axios";

import Sukses from "../assets/images/success.svg";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function Success() {
  const serverHost = "http://localhost:5001";
  const [products, setProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(serverHost + "/detail").then((res) => {
      // console.log(res.data);
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <div className="page-content page-success">
        <div className="section-success" data-aos="zoom-in">
          <div className="container">
            <div className="row align-items-center row-login justify-content-center">
              <div className="col-lg-6 text-center">
                <img src={Sukses} alt="" className="mb-4" />
                <h2>WARUNG0{location.state.id}</h2>
                <p>Token Pengambillan</p>
                <div>
                  <a className="btn btn-success w-50 mt-4" href="/dashboard">
                    My Dashboard
                  </a>
                </div>
                <div>
                  <a
                    className="btn btn-signup w-50 mt-2"
                    href="http://wa.me/+6287826468665"
                  >
                    Chat Toko
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
