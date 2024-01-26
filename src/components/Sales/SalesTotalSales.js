import React, { useEffect, useState } from "react";

export const SalesTotalSales = ({ filteredMonth }) => {
  const [ordersCost, setOrdersCost] = useState(0);
  //   const [totalMonthSales, setTotalMonthSales] = useState([]);
  let totalCost = 0;

  useEffect(() => {
    filteredMonth.forEach((pizza) => {
      console.log("PizzatipCost", pizza.order?.tip);
      console.log("pizzaToppingsCost", pizza?.pizzaToppings?.length / 2);
      console.log("pizzaSizeCost", pizza?.size?.cost);
      if (pizza?.order?.Delivery) {
        let orderCost =
          5 +
          parseInt(pizza?.order?.tip) +
          pizza?.pizzaToppings?.length / 2 +
          parseInt(pizza?.size?.cost);
        totalCost += orderCost;
      } else {
        let orderCost =
          parseInt(pizza?.order?.tip) +
          pizza?.pizzaToppings?.length / 2 +
          parseInt(pizza?.size?.cost);
        totalCost += orderCost;
      }
    });
    const formattedNumber = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setOrdersCost(formattedNumber);
  }, [filteredMonth]);

  return (
    <section className="total-sales-container">
      <h4>🍅🍕Total Sales Amount🍕🍅</h4>
      <h6 className="sales-item">{ordersCost}</h6>
    </section>
  );
};

//tip, dilivery, topping, size
