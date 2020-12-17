import React from "react";
import home from "./Home.css";
import Product from "../product/product";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home_row">
          <Product
          id={87798}
            title="Nixplay Smart Digital Picture Frame 10.1 Inch, Share Video Clips and Photos Instantly via E-Mail or App"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/716urzPi1eL._AC_UY218_.jpg"
          />
          <Product
          id={87798}
            title="Dragon Touch Digital Picture Frame, 8-Inch Wi-Fi Digital Photo Frame with IPS Touch Screen HD Display, 16GB Storage, Share Photos via App, Email, Cloud, Support USB Drive/SD Card - Classic 8"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41iUFabgmNL._AC_SR160,160_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="the learn start up"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
          id={213235}
            title="the learn start up"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
          id={87798}
            title="the learn start up"
            price={2.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
          id={87798}
            title="an iphonr 2"
            price={6.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
