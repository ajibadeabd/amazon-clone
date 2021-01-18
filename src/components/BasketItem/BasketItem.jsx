import React from "react";
import "./Basket.css";
import { useStateValue } from "../store/stateProvider";
export default function BasketItem({ hideButton,title,qty, id, image, rating, price }) {
 
    const [state, dispatch] = useStateValue();

    const DELETE_FROM_BASKET=()=>{
        dispatch({
            type:"DELETE_FROM_BASKET",
            id
        })

    }
  return (
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="" />

        <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        {/* </p>qty: */}
          {/* <strong>{qty}</strong> */}
        {/* <p> */}
          
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>

// 


            ))}
        </div>
        {hideButton?'':
      <button
      onClick={DELETE_FROM_BASKET}
      >remove from basket</button>}

      </div>
    </div>
  );
}
