/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { AuthContext } from "./providers/AuthProvider";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <nav className="pb-2 bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white font-semibold rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                {" "}
                Blog
              </NavLink>

              <NavLink
              to="/alltoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span >All Toy</span>
            </NavLink>

            {/* conditional */}

            {user?.email ?(<>
            
              <NavLink
              to="/bookings"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span >My Toys</span>
            </NavLink>

            <NavLink
              to="/add toy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span >Add Toy</span>
            </NavLink>
            
            </>) :(
                ""

            ) }


            </ul>
          </div>

          <div className="flex justify-center  items-center">
            <Link to="/">
              <img className="w-36 h-auto" src={logo} alt="" />
            </Link>
            <h1 className="md:text-4xl text-xl font-bold">ToyHaven</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-52  font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span className="ms-6">Blog</span>
            </NavLink>


            <NavLink
              to="/alltoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span className="ms-6">All Toy</span>
            </NavLink>

            {/* conditional */}

            {user?.email ?(<>
            
              <NavLink
              to="/bookings"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span className="ms-6">My Toys</span>
            </NavLink>

            <NavLink
              to="/addtoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span className="ms-6">Add Toy</span>
            </NavLink>
            
            </>) :(
                ""

            ) }


          </ul>
        </div>

          <div className="navbar-end">

            
        { !user?.email ?  <>
          <Link to="/login">
                <a className="btn btn-primary md:w-auto ">
                  Log In
                </a>
              </Link>
           
        </> 
        : ""
       }

            
        
          {user && (
            <span className="white flex justify-center items-center ps-2">
              <Tooltip title={user.displayName ? user.displayName : user.email}>
                <img
                  className="w-12 h-12 me-2 rounded-full"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://ionicframework.com/docs/img/demos/avatar.svg"
                  }
                />
              </Tooltip>
              

              <button
                className="btn btn-primary"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
