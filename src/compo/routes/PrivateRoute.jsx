/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center pt-48 pb-44">{<CircularProgress />}</div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
