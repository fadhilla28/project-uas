/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const serverHost = "http://localhost:5001";
  return (
    <>
      <div
        className="col-6 col-md-4 col-lg-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Link
          to={`/detail/${props.id}`}
          state={{
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.image,
            desc1: props.desc1,
            desc2: props.desc2,
            path: props.path,
          }}
        >
          <a className="component-products d-block">
            <div className="products-thumbnail">
              <div
                className="products-image"
                style={{
                  backgroundImage: `url(${serverHost + props.path})`,
                }}
              ></div>
            </div>

            <div className="products-text">{props.name}</div>
            <div className="products-price">Rp. {props.price}</div>
          </a>
        </Link>
      </div>
    </>
  );
}
