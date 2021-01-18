import './App.css';
import React ,{useEffect} from 'react'
import Header from './components/Header/Header';
import Login from './components/reg&log/login.jsx';
import Home from './components/Home/Home';
import Payment from './components/payment/Payment';
import Order from './components/order/Order';


import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Checkout from './components/Checkout/Checkout';
import {auth} from './firsbase';
import {useStateValue} from './components/store/stateProvider';

import {Route} from 'react-router';

function App() {
  const [{},dispatch] = useStateValue();
  const promise = loadStripe("pk_test_dy8c1tZzsJZ43zkKVcEYWLYl00qqIQfBdi")
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  })


  },[])
  return (
    <div className="App">
      
        <Header/>
        


        <Route exact  path="/checkout">
        <Checkout />
        </Route>
        <Route   path="/login">
        <Login />
        </Route>

        <Route   path="/order">
        <Order />
        </Route>
        <Route   path="/payment">
          <Elements stripe={promise}>
          <Payment />

          </Elements>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        
        
    </div>
  );
}

export default App;
