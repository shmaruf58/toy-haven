import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./compo/Home.jsx";
import ErrorPage from "./compo/ErrorPage.jsx";

import Blog from "./compo/Blog.jsx";
import Login from "./compo/login/Login.jsx";
import Signup from "./compo/signUp/Signup.jsx";
import AuthProvider from "./compo/providers/AuthProvider.jsx";
import Mytoys from "./compo/Mytoys.jsx";

import Details from "./compo/Details.jsx";
import PrivateRoute from "./compo/routes/PrivateRoute.jsx";
import Addtoy from "./compo/Addtoy.jsx";
import Alltoy from "./compo/Alltoy.jsx";
import Toydetails from "./compo/Toydetails.jsx";
import Update from "./compo/Update.jsx";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },

      {
        path: '/login', 
        element: <Login></Login>
    }, 
    {
        path: '/signup', 
        element: <Signup></Signup>
    },


    {
      path: "/alltoy",
      element: <Alltoy></Alltoy>,
      loader: ()=> fetch('https://el-server.vercel.app/bookings')
    },

    {
      path: '/toydetails/:id', 
      element: <Toydetails></Toydetails>,
      loader: ()=> fetch('https://el-server.vercel.app/bookings')
    },

    {
      path: '/bookings', 
      element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>
    },


    {
      path: "/addtoy",
      element: <Addtoy></Addtoy>
    },
    
    {
      path: "/details/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute> 
    },

    {
      path: "/updatetoy/:id",
      element: <Update></Update>,
      loader: () => fetch('https://el-server.vercel.app/bookings')
      

    },








    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
