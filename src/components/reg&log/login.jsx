import React ,{useState}from "react";
import {auth} from "../../firsbase";
import { Link,useHistory } from "react-router-dom";
// import { Link,useHistory } from "../store/stateProvider";
import "./login.css";
const Login = () => {
  const [pass,setPass]=useState('')
  const [email,setEmail]=useState('')
  const history = useHistory()
  const login=(e)=>{
    // console.log(pass,email)
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,pass)
    .then(aut=>{
      history.push("/")

    })
    .catch(e=>{
      alert(e.message)
    })
  }
  const regiseter=(e)=>{
    // console.log(pass,email)
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,pass)
    .then(aut=>{
      // history.push("/")
      alert('account created pls login')

    })
    .catch(e=>{
      alert(e.message)
    })
  }
  const onchange1=(e)=>{
    setEmail(e.target.value)
  }
  const  onchange2=(e)=>{
    setPass(e.target.value)
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1 className="">Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text"
          value={email}
          onChange={onchange1}
          name="email"  />
          <h5>password</h5>
          <input type="password"
          value={pass}
          onChange={onchange2}
          name="password"  />
          <button 
          className="login_signin"
          onClick={login}>Login</button>
        </form>
        <p>By signing to our ...</p>
        <button onClick={regiseter} className="login_reg">create your amazon account</button>
      </div>
    </div>
  );
};
export default Login;
