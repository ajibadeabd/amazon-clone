import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../store/stateProvider";
import { auth } from "../../firsbase";

export default function Header() {
  const [state, dispatch] = useStateValue();
const handleAuth  =()=>{
    if(state.user)
    auth.signOut()
}
  return (
    <div className="header">
    <div className="header_logo"> 
 <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
    </div>
     

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
          <Link to={!state.user && "/login"}>
          <div  onClick={handleAuth} className="header_option">
          <span class="header_optionLineOne">hello {state.user?.email?state.user.email:'guest'}</span>
          <span class="header_optionLineTwo">{state.user?"sign out" : "sign in"} </span>
        </div>
          </Link>

          { state.user &&  
          <Link to={state.user && "/order"}>
        
        <div className="header_option">
          <span class="header_optionLineOne">return </span>
          <span class="header_optionLineTwo">& orders </span>
        </div>
        </Link>}

        <div className=" prime header_option">
          <span class="header_optionLineOne">your</span>
          <span class="header_optionLineTwo"> prime </span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            
            <span className="header_optionLineOne header_basketCount">
              {state?.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
