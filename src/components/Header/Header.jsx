import React from "react";
import header from "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span class="header_optionLineOne">hello guest</span>
          <span class="header_optionLineTwo">sign in </span>
        </div>
        <div className="header_option">
          <span class="header_optionLineOne">return </span>
          <span class="header_optionLineTwo">& orders </span>
        </div>
        <div className="header_option">
          <span class="header_optionLineOne">your</span>
          <span class="header_optionLineTwo"> prime </span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasket />
          <span className="header_optionLineOne header_basketCount">
0
          </span>
        </div>
      </div>
    </div>
  );
}
