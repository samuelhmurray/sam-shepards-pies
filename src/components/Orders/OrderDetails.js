import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Orders.css";
import {
  deleteOrder,
  getOrderByOrderId,
} from "../../Services/orderServices.js";
import { PizzaList } from "../Pizzas/PizzaList.js";

export const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const { orderId } = useParams();
  const [baseOrderCost, setBaseOrderCost] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getOrderByOrderId(orderId).then((data) => {
      const orderObj = data[0];
      setOrder(orderObj);
    });
  }, [orderId]);

  useEffect(() => {
    if (order.id) {
      setBaseOrderCost(order.delivery ? 5 + order.tip : order.tip);
      console.log(baseOrderCost);
    }
  }, [order]);

  const handleDeleteOrder = () => {
    deleteOrder(orderId).then(() => {
      navigate("/orders");
    });
  };

  return baseOrderCost !== 0 ? (
    <section className="order-details text-light">
      <header> Order #:{orderId} </header>

      <div>
        <span></span>
        <PizzaList baseOrderCost={parseInt(baseOrderCost)} />
      </div>
      <div></div>
      <div>
        <button className="btn btn-success">Edit Order</button>
      </div>
      <div>
        <button onClick={handleDeleteOrder} className="btn btn-danger">
          Delete Order
        </button>
      </div>
    </section>
  ) : (
    <></>
  );
};
