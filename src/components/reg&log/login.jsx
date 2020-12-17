import React ,{useState}from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [pass,setPass]=useState('')
  const [email,setEmail]=useState('')
  const login=()=>{
    console.log('kj')
    // e.preventDefaults()
  }
  onchange=(e)=>{
    setEmail(e.target.value)
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
        <h1 className="login_signin">sign</h1>
        <form action="">
          <h5>email</h5>
          <input type="text"
          value={email}
          onChange={onchange}
          name="email"  />
          <h5>password</h5>
          <input type="password"
          value={pass}
          onChange={onchange}
          name="password"  />
          <button 
          className="login_log"
          onClick={login}>send</button>
        </form>
        <p>by signing to our ...</p>
        <button className="login_reg">create your amazon account</button>
      </div>
    </div>
  );
};
export default Login;
