import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const AdminNav = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item text-primary">
        <Link className="navbar-link" to="/createOrder">
          Create Order!
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/orders">
          All Orders
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/employees">
          Employees
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/salesReport">
          Sales Report
        </Link>
      </li>
      <li className="navbar-item navbar-logout">
        <Link
          className="navbar-link"
          to="/logIn"
          onClick={() => {
            localStorage.removeItem("pizza_user");
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
