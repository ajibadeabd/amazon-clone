import React from "react";
import product from "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>the learn start up</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product_rating">
          <p>X</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpg"
        alt=""
      />
      <button>add to basket</button>
    </div>
  );
};

export default Product;
