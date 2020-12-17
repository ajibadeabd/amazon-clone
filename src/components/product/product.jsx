import React from "react";
import  "./product.css";
import {useStateValue} from  "../store/stateProvider";

const Product = ({title,id,price,rating,image}) => {
    const [state,dispatch]=useStateValue()
    const addToBasket=()=>{

        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,price,rating,image,title,qty:1
            }
        })
    }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div key={title} className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                <p>x</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
};

export default Product;
