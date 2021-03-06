import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useRef  } from "react";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmitClick = async(e)=>{
     e.preventDefault();
     const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      await axios.post('/user/register',user);
      localStorage.setItem('firstLogin',true);
      window.location.href = "/";
    } catch (error) {
      
      alert(error.response.data);
    } 
  }
  return (
    <div className="login-a">
      <div className="login-container">
        <h1 className="login-head">register</h1>
        <input
          className="login-inp"
          type="text"
          placeholder="Name"
          required
          ref={username}
        />
        <input
          className="login-inp"
          type="email"
          placeholder="Email"
          required
          ref={email}
        />
        <input
          className=" login-inp"
          type="Password"
          placeholder="Password"
          ref={password}
          required
        />
        <button className="submit-btn" onClick={handleSubmitClick} required>
          submit
        </button>
        <div className="btn">
          <button className="btn-a">
            <Link to="/register">register</Link>
          </button>
          <button className="btn-b">
            <Link to="/login">login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
