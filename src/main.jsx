import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./compo/Home.jsx";
import ErrorPage from "./compo/ErrorPage.jsx";
import Alltoy from "./compo/allToy.jsx";
import Blog from "./compo/Blog.jsx";
import Login from "./compo/login/Login.jsx";
import Signup from "./compo/signUp/Signup.jsx";
import AuthProvider from "./compo/providers/AuthProvider.jsx";





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
        path: "/alltoy",
        element: <Alltoy></Alltoy>
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
