import React from "react";
import "./checkout.css";
import Subtotal from "../subtotal/subtotal";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../store/stateProvider";
export default function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">your shopping basket</h2>
          {state.basket.map((item) => (
            <BasketItem 
            id={item.id}
            qty={item.qty}
            price={item.price}
            rating={item.rating}
            title={item.title}
            image={item.image}
            />
            
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
