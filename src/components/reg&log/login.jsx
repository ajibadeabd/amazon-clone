import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
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
          <input type="text" name="" id="" />
          <h5>password</h5>
          <input type="password" name="" id="" />
          <input type="submit" value={"signin"} name="" id="" />
        </form>
        <p>by signing to our ...</p>
        <button className="login_signup">create your amazon account</button>
      </div>
    </div>
  );
};
export default Login;
