import React, { useEffect, useState } from "react";

export const PopularSauceSales = ({ filteredMonth }) => {
  const [popularSauce, setPopularSauce] = useState("");

  useEffect(() => {
    if (!Array.isArray(filteredMonth) || filteredMonth.length === 0) {
      setPopularSauce("None");
      return;
    }

    const sauces = filteredMonth.map((pizzaObj) => pizzaObj.sauce.sauce);

    const sauceCounts = {};
    sauces.forEach((sauce) => {
      sauceCounts[sauce] = (sauceCounts[sauce] || 0) + 1;
    });

    let maxCount = 0;
    let mostPopularSauce = "";

    sauces.forEach((sauce) => {
      if (sauceCounts[sauce] > maxCount) {
        maxCount = sauceCounts[sauce];
        mostPopularSauce = sauce;
      }
    });

    setPopularSauce(mostPopularSauce);
  }, [filteredMonth]);

  return <h6>Most Popular Sauce: {popularSauce}</h6>;
};
