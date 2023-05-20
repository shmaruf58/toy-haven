/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { AuthContext } from "../providers/AuthProvider";
import app from "../../firebase/firebase.config";


const Login = () => {
  const [show, setShow] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  
  const auth = getAuth(app);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  

  
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

 

  
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="bg-base-200 -mt-5 pt-16 pb-16">
    <div className="form-container bg-cyan-400 pb-10">
      <h2 className="form-title me-6">Log In</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="emnail" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p onClick={() => setShow(!show)}>
            <small className="cursor-pointer">
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit btn-primary" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Toy Haven? <Link to="/signup" className="text-blue-700 underline">Create New Account</Link>
        </small>
      </p>


      <div className=" social-button-container mx-auto w-80 me-20 pb-5 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button cursor-pointer"
          src="https://icon-library.com/images/sign-in-with-google-icon/sign-in-with-google-icon-19.jpg"
          alt=""
        />
      </div>
    
    </div>
    </div>

    </div>
  );
};

export default Login;
