import React,{useState,useEffect} from "react"
import {db} from "../../firsbase"
import EOrder from "./EOrder"
import {useStateValue} from "../store/stateProvider"

import "./Order.css"
const Order=()=>{
    const [ orders,setorders]=useState([])
    const [ {basket,user},dispatch]=useStateValue([])


 useEffect(()=>{
     if(user){
        db.collection("users")
        .doc(user?.uid)
        .collection('orders')
        // .doc(paymentIntent.id)
        .orderBy('created','desc')
        .onSnapshot(snapshot=>{
            setorders(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
     }else{
        //  setorders([])
     }
 console.log(orders,user)
},[user])
    return(
        <div className='order'>
            <h1>Your orders</h1>

            <div className="orders__order">
                {orders?.map(eorder=>(
                    <EOrder order={eorder}/>
                ))}
            </div>
        </div>
    )

}

export default Order