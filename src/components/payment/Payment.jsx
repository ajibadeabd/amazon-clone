import { useStateValue } from "../store/stateProvider";
import { getBasketTotal } from "../store/reducer";
import React, { useState ,useEffect} from "react";
import axios from "../config/axios";
import {db} from "../../firsbase";
import Checkout from "../BasketItem/BasketItem";
import "./Payment.css";
import { Link,useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const Payment = () => {
const history=useHistory()

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSuccess] = useState(false);
  const [processing, setProcess] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const [state, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async(e) => {
      e.preventDefault();
      setProcess(true)
      const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
      }).then(({paymentIntent})=>{
        
          db.collection("users")
          .doc(state?.user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket:state.basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created
          })
          setSuccess(true)
          setError(null)
          setProcess(false)
          dispatch({
              type:"EMPTY_BASKET"
          })
          history.replace("/order")
      })
  };
  const handleChange = (e) => {
    setError(e.error ? e.error.message : "");
    setDisabled(e.empty);
  };
  const getClientSec=async ()=>{
    if((getBasketTotal(state?.basket) * 100)!=0){
      
    const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(state?.basket) * 100}`
    });
    
setClientSecret(response.data.clientSecret)}
  }
  useEffect(()=>{
      
      getClientSec()
    },[state.basket])
    console.log(clientSecret)
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          <Link to="/checkout">
            Checkout(
            {state.basket?.length} {state.basket?.length < 2 ? "item" : "items"}
            )
          </Link>
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Deliverya address</h3>
          </div>
          <div className="payment_address">
            <p>{state.user?.email}</p>
            <p>{"14 calisto street"}</p>
            <p>{`lagos, nigeria`}</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_item">
            all product{" "}
            {state.basket.map((eachbask) => (
              <Checkout
                id={eachbask.id}
                rating={eachbask.rating}
                price={eachbask.price}
                image={eachbask.image}
                title={eachbask.title}
              />
            ))}
          </div>
        </div>
        
          
          {
                  getBasketTotal(state?.basket)==0?
                  <h2 style={{textAlign:'center'}}>you have no item in your cart</h2>
                  :
        <div className="payment_section">

                  <div className="payment_title">
                  <h3>Payment Method</h3>
                </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            
              <div className="payment_pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <p>
                      Subtotal({state.basket.length} items):{" "}
                      <strong>{value}</strong>
                    </p>
                    // <small className="subtotal_gift">
                    //   <input type="checkbox" />
                    //   This order contains a gift
                    // </small>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(state?.basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
               
                
                <button className='buy' disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "BUY NOW"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Payment;
