import React,{useState,useEffect} from "react"
import  "./Order.css"
import   Checkout from "../BasketItem/BasketItem"
import moment from "moment"
import CurrencyFormat from "react-currency-format";
import "./Order.css"
const Order=({order})=>{
    

    return(
        <div className='order'>
           <h2>order</h2>
           <p >
               {moment.unix(order.data.created).format('MMMM  Do YYYY, h:mma')}
           </p>
           <p  className="order__id">
               <small >
                   {order.id}
               </small>
           </p>

               <div className='ver'>{order.data.basket?.map(item=>(
                   <Checkout 
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   hideButton
                   
                   
                   />
               ))}
               
               <CurrencyFormat
               className='total'
                  renderText={(value) => (
                    <p>
                      Order Total :{value}
                    </p>
                  )}
                  decimalScale={2}
                  value={order.data.amount/100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
               </div>
        </div>
    )

}

export default Order