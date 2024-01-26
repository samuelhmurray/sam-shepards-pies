import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { OrderList } from "../components/Orders/OrderList.js";
import { OrderDetails } from "../components/Orders/OrderDetails.js";
import { CreateOrder } from "../components/Orders/CreateOrder.js";
import { Login } from "../components/Login/Login.js";
import { EmployeeList } from "../components/employees/EmployeeList.js";
import { CreatePizza } from "../components/Pizza/CreatePizza.js";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="orders">
          <Route index element={<OrderList />} />
          <Route path=":orderId">
            <Route index element={<OrderDetails />} />
            <Route path="createPizza" element={<CreatePizza />} />
          </Route>
        </Route>{" "}
        <Route path="createOrder">
          <Route index element={<CreateOrder currentUser={currentUser} />} />
          <Route
            path=":orderId/createPizza"
            element={<CreatePizza currentUser={currentUser} />}
          />
        </Route>
        <Route path="logIn" element={<Login />} />
      </Route>
    </Routes>
  );
};
