import React, { useEffect, useState } from "react";

export const PopularCheeseSales = ({ filteredMonth }) => {
  const [popularCheese, setPopularCheese] = useState("");

  useEffect(() => {
    if (!Array.isArray(filteredMonth) || filteredMonth.length === 0) {
      setPopularCheese("None");
      return;
    }

    const cheeses = filteredMonth.map((pizzaObj) => pizzaObj.cheese.cheese);

    const cheeseCounts = {};
    cheeses.forEach((cheese) => {
      cheeseCounts[cheese] = (cheeseCounts[cheese] || 0) + 1;
    });

    let maxCount = 0;
    let mostPopularCheese = "";

    cheeses.forEach((cheese) => {
      if (cheeseCounts[cheese] > maxCount) {
        maxCount = cheeseCounts[cheese];
        mostPopularCheese = cheese;
      }
    });

    setPopularCheese(mostPopularCheese);
  }, [filteredMonth]);

  return <h6>Most Popular Cheese: {popularCheese}</h6>;
};
