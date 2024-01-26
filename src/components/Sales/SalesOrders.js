import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const SalesOrders = ({ order }) => {
  const date = new Date(order?.datePlaced);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <section className="order">
      <header className="order-info">Order #: {order?.id}</header>
      <div className="order-info">Date Placed: {formattedDate}</div>
    </section>
  );
};
