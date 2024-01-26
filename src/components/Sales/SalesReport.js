import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../Services/orderServices.js";
import { Link } from "react-router-dom";
import { Order } from "../Orders/Order.js";
import { SalesMonthDropdown } from "./SalesMonthDropdown.js";
import "./Sales.css";
import { SalesTotalSales } from "./SalesTotalSales.js";
import { SalesPopularItems } from "./SalesPopularItems.js";
import { getAllPizzas } from "../../Services/pizzaServices.js";
import { SalesOrders } from "./SalesOrders.js";

export const SalesReport = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState([]);
  const [filteredMonthOrder, setFilteredMonthOrder] = useState([]);
  useEffect(() => {
    getAllPizzas().then((ordersArray) => {
      setAllOrders(ordersArray);
      setFilteredMonth(ordersArray);
      setFilteredMonthOrder(filteredMonth);
    });
  }, []);

  useEffect(() => {
    setFilteredMonthOrder(filteredMonthOrder?.order);
  }, []);

  const handleCompairDate = (monthIndex, order) => {
    const compairMonth = new Date(order?.order?.datePlaced).getMonth();

    if (compairMonth === monthIndex) {
      return order;
    }
  };

  const handleFilter = (selectedMonth) => {
    if (selectedMonth === "") {
      setFilteredMonth(allOrders);
    } else if (selectedMonth === "Jan") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(0, order);
        })
      );
    } else if (selectedMonth === "Feb") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(1, order);
        })
      );
    } else if (selectedMonth === "Mar") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(2, order);
        })
      );
    } else if (selectedMonth === "Apr") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(3, order);
        })
      );
    } else if (selectedMonth === "May") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(4, order);
        })
      );
    } else if (selectedMonth === "Jun") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(5, order);
        })
      );
    } else if (selectedMonth === "Jul") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(6, order);
        })
      );
    } else if (selectedMonth === "Aug") {
      setFilteredMonth(
        allOrders.filter((order) => {
          return handleCompairDate(7, order);
        })
      );
    }
  };

  return (
    <div className="sales-container">
      <h2 className="text-light">Sales Report</h2>
      <div>
        <SalesMonthDropdown handleFilter={handleFilter} />
      </div>
      <section className="sales-box">
        <article className="orders text-light sales-orders">
          {filteredMonth.map((orderObj) => (
            <Link key={orderObj.id} to={`/orders/${orderObj.orderId}`}>
              <SalesOrders order={orderObj.order} key={orderObj.orderId} />
            </Link>
          ))}
        </article>
        <article className="sidebar-container">
          <SalesTotalSales filteredMonth={filteredMonth} />
          <SalesPopularItems filteredMonth={filteredMonth} />
        </article>
      </section>
    </div>
  );
};
