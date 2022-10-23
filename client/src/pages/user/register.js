import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  var navigate = useNavigate();
  var [message,setMesage] = useState('');
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(e)
    if(e.target[3].value != e.target[4].value){
      setMesage('password doesn\'t match ');
      return;
    }
    let formData = {
      first_name : e.target[0].value, last_name : e.target[1].value, password : e.target[3].value, email : e.target[2].value, 
    }
    let data  = await fetch('http://localhost:8080/signup',{method:'POST',headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },body:JSON.stringify(formData),credetials: 'include'});
    if(data.status ==201){
      navigate('/login')
    } 
    else{
      setMesage('make sure everything is correct, try change email')
    }
  }
  return (
    <div className="boss elnurregister">
      <header className="header">
        <h1>Shopper. </h1>
      </header>
      <div className="Reg-form-container">
        {/* <h1>register</h1> */}
        {/* <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul> */}
          <p style={{color:'red',fontWeight:"500",textAlign:"center"}}>{message}</p>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <div className="form-body">
            <h1>Register</h1>
            <div className="username">
              <label className="form__label" htmlFor="firstName"></label>
              <input
                placeholder="       First Name
"
                className="form__input"
                type="text"
                id="firstName"
              />
            </div>
            <div className="lastname">
              <label className="form__label" htmlFor="lastName">
                {" "}
              </label>
              <input
                placeholder="       Last Name"
                type="text"
                name=""
                id="lastName"
                className="form__input"
              />
            </div>
            <div className="email">
              <label className="form__label" htmlFor="email">
                {" "}
              </label>
              <input
                placeholder="       Email"
                type="email"
                id="email"
                className="form__input"
              />
            </div>
            <div className="lastinput">
              {" "}
              <div className="password">
                <label className="form__label" htmlFor="password">
                  {" "}
                </label>
                <input
                  placeholder="       Password*"
                  className="form__input"
                  type="password"
                  id="password"
                />
              </div>
              <div className="confirm-password">
                <label className="form__label" htmlFor="confirmPassword"></label>
                <input
                  Confirm
                  password
                  placeholder="       Confirm password*"
                  className="form__input"
                  type="password"
                  id="confirmPassword"
                />
              </div>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
            <div className="footer">
              {" "}
              Already have an account?<Link to="/login"> Sign in now</Link>
            </div>
          </div>
      </form>
    </div>
    </div >
  );
}
