import React from "react";
import { useLocation } from "react-router-dom";

export const AdsCard = (product) => {
  const location = useLocation();

  if (!product) return;
  return (
    <div className="post-box">
      <div className="thumbnail-holder">
        <a href={`/product?id=${product.id}`}>
          <img src={product.img} alt={product.name} />
        </a>
      </div>
      <div className="post-box-content">
        <h3>
          <a
            href={`${location.pathname}?name=${product.name}`}
            alt="Similar product name"
          >
            {product.name}
          </a>
        </h3>

        <div className="post-category">
          <a
            href={`${location.pathname}?category=${product.category}`}
            alt="Similar product category"
          >
            {" "}
            <i className="fa fa-list-alt"></i> {product.category}
          </a>
        </div>
        <div className="post-location">
          <a
            href={`${location.pathname}?location=${product.location}`}
            alt="Similar product location"
          >
            {" "}
            <i className="fa fa-location-arrow"></i> {product.location}
          </a>
        </div>
        <div className="post-meta">
          <i className="fa fa-dollar"></i>
          {product.price}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};
