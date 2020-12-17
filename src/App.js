import './App.css';
import Header from './components/Header/Header';
import Login from './components/reg&log/login.jsx';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import {
Route} from 'react-router';

function App() {
  return (
    <div className="App">
      
        <Header/>
        


        <Route exact  path="/checkout">
        <Checkout />
        </Route>
        <Route   path="/login">
        <Login />
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        
        
    </div>
  );
}

export default App;
