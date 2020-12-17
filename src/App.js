import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import {BrowserRouter as Router,
Switch,
Route} from 'react-router';

function App() {
  return (
    <div className="App">
      
        <Header/>
        


        <Route exact  path="/checkout">
        <Checkout />
        </Route>
        {/* <Route   path="*">
        "error"
        </Route> */}
        <Route exact path="/">
        <Home/>
        </Route>
        
        
    </div>
  );
}

export default App;
