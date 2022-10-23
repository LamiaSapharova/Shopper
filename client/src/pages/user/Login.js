import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate, } from "react-router-dom";
import axios from 'axios';
export default function Login() {
  var [message, setMesage] = useState('');
  let navigate = useNavigate();
  async function HandleSubmit(e) {
    e.preventDefault();
    let postData = { username: e.target[1].value, password: e.target[3].value };
    try {
      let data = await axios.post('http://localhost:8080/signin', postData, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "localhost:3000",withCredentials:true, 'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
      }).then(r => r);
      navigate('/')
    } catch(error){
      const errorMessage = error.response.data.message;
      setMesage(errorMessage);
    }
    
    // let data  = await fetch('http://localhost:8080/signin',{method:'POST',headers: {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // },body:JSON.stringify({
    //   'username': e.target[1].value,
    //   'password': e.target[3].value,

    // }),credetials: 'include'});
    
  }
  return (
    <div className="Auth-form-container elnurslogin">
      {/* loginpage
      <ul>
        <li>
          {" "}
        
        </li>

        <li>
          
        </li>
      </ul> */}
      <div className="logo_side">
        <h1>Shopper. </h1>
      </div>
      <div className="login_side">
        <div className="login-container">
          <form method="post" onSubmit={HandleSubmit}>
            <p style={{ color: "red", fontWeight: 500, textAlign: 'center' }}>{message}</p>
            <div className="input-container">
              <h1>Sign In</h1>
              <fieldset className="mail">
                {/* <label>Username or Email Address </label> */}
                <input
                  type="text"
                  name="uname"
                  required
                  placeholder="      Email Address *"
                />
              </fieldset>
              <fieldset className="pasword">
                {/* <label>Password </label> */}
                <input
                  type="password"
                  name="pass"
                  required
                  placeholder="      Password *"
                />
              </fieldset>
            </div>
            <div className="Checkboxx">
              <div className="Check_inp">
                {" "}
                <input className="checint" type="checkbox" />
                <p>Remember me</p>
              </div>
              <a className="forgot" href="/">
                Forgot password?
              </a>
            </div>
            <div className="button_container">
              <input className="button" type="submit" value="Sing In" />
            </div>
            <div className="member">
              Not a member?<Link to="/register"> Sign up now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
