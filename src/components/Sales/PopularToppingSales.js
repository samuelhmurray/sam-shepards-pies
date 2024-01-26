import React, { useEffect, useState } from "react";

export const PopularToppingSales = ({ filteredMonth }) => {
  const [popularTopping, setPopularTopping] = useState("");

  useEffect(() => {
    if (!Array.isArray(filteredMonth) || filteredMonth.length === 0) {
      setPopularTopping("None");
      return;
    }

    const toppings = filteredMonth.map((pizzaObj) => pizzaObj.topping.topping);

    const toppingCounts = {};
    toppings.forEach((topping) => {
      toppingCounts[topping] = (toppingCounts[topping] || 0) + 1;
    });

    let maxCount = 0;
    let mostPopularTopping = "";

    toppings.forEach((topping) => {
      if (toppingCounts[topping] > maxCount) {
        maxCount = toppingCounts[topping];
        mostPopularTopping = topping;
      }
    });

    setPopularTopping(mostPopularTopping);
  }, [filteredMonth]);

  return <h6>Most Popular Topping: {popularTopping}</h6>;
};
