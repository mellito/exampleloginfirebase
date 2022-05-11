import React from "react";
import { useAuth } from "../Context/AuthContex";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
