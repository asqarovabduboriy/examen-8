import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let isLogin = localStorage.getItem("login");
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
