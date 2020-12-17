import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer,{initialState} from './components/store/reducer';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './components/store/stateProvider';
import {BrowserRouter as Router,
  Switch} from 'react-router-dom';
  
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
    <StateProvider initialState={initialState}
    reducer={reducer}
    >
<App />

    </StateProvider>
    
    </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
