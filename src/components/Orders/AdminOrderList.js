import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllOrders } from "../../Services/orderServices.js";
import { Order } from "./Order.js";
import "./Orders.css";
import { Link } from "react-router-dom";
import { OrderFilterBar } from "./OrderFilterBar.js";
import { getAllEmployees } from "../../Services/employeeServices.js";
import { EmployeeDropdown } from "../employees/EmployeeDropdown.js";

export const AdminOrderList = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [sortedOrders, setSortedOrders] = useState([]);
  const [sortOrder, setSortOrder] = useState("oldest");
  const [allEmployees, setAllEmployees] = useState([]);

  const getAndSetOrders = () => {
    getAllOrders().then((ordersArray) => {
      setAllOrders(ordersArray);
      sortOrders(ordersArray, sortOrder);
    });
  };

  const sortOrders = (orders, order) => {
    const sortedOrders =
      order === "oldest"
        ? [...orders].sort(
            (a, b) => new Date(a.datePlaced) - new Date(b.datePlaced)
          )
        : [...orders].sort(
            (a, b) => new Date(b.datePlaced) - new Date(a.datePlaced)
          );

    setSortedOrders(sortedOrders);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    getAndSetOrders();
  }, []);

  useEffect(() => {
    sortOrders(allOrders, sortOrder);
  }, [allOrders, sortOrder]);

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setAllEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="orders-container ">
      <h2 className="text-light">Orders</h2>
      <div>
        <OrderFilterBar handleSortChange={handleSortChange} />
      </div>
      <article className="orders text-light">
        {sortedOrders.map((orderObj) => (
          <Link key={orderObj.id} to={`/orders/${orderObj.id}`}>
            <Order
              getAndSetOrders={getAndSetOrders}
              order={orderObj}
              key={orderObj.id}
            />
            <EmployeeDropdown allEmployees={allEmployees} />
          </Link>
        ))}
      </article>
    </div>
  );
};
