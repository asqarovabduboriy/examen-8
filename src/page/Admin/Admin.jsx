import React from "react";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const location = useNavigate();
  const handllogout = () => {
    localStorage.clear("login");
    location("/login");
  };

  return (
    <>
      <div className="admin">
        <div className="sidebar">
          <div className="container">
            <h1>Admin dashboard</h1>
            <ul>
              <li>
                <Link to="create">
                  <IoCreateOutline /> Create product{" "}
                </Link>
              </li>
              <li>
                <Link to="mange">
                  <CiEdit /> Manage product
                </Link>
              </li>
              <li>
                <button onClick={handllogout}> Logout </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
