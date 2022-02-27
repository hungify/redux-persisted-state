import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../../redux/selectors/getAuth";

function RequireAuth({ children }) {
  const isAuthenticated = useSelector(getAuth)?.isAuthenticated;
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
