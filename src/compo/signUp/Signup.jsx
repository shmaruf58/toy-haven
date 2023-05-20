/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./signUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./signUp.css";
import { AuthContext } from "../providers/AuthProvider";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  
  const auth = getAuth(app);

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name);
    

    setError("");

    if (password !== confirm) {
      setError("Password did not match!");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character!");
      return;
    }

    createUser( email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };


    
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







  return (

    <div className="bg-base-200 -mt-5 pt-16 pb-16">
    <div className="form-container bg-cyan-400  pb-10">
      <h2 className="form-title me-6">Sign Up </h2>
   

      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="Confirm" id="confirm" required />
        </div>

        <div className="form-control">
          <label htmlFor="email">Photo URL</label>
          <input type="text" name="url" id="url" required />
        </div>


        
        
     

      

        <input
          className="btn-submit btn-primary"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p>
        <small>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Log In
          </Link>
        </small>
      </p>
      <p className="text-error">{error}</p>

      <div className=" social-button-container mx-auto w-80 me-20 pb-5 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://icon-library.com/images/sign-in-with-google-icon/sign-in-with-google-icon-19.jpg"
          alt=""
        />
      </div>
    
    </div>
    </div>
    </div>
  );
};

export default Signup;
