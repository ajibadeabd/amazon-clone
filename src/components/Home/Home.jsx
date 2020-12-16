import React from "react";
import home from "./Home.css";
import Product from "../product/product.jsx";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
        <img
        className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        />
        <div className="home_row">
            <Product/>
            {/* <Product/> */}

        </div>
        <div className="home_row">

        </div>
        <div className="home_row">

        </div>
      </div>
    </div>
  );
}
