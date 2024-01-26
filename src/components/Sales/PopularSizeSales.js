import React, { useEffect, useState } from "react";

export const PopularSizeSales = ({ filteredMonth }) => {
  const [popularSize, setPopularSize] = useState("");

  useEffect(() => {
    if (!Array.isArray(filteredMonth) || filteredMonth.length === 0) {
      setPopularSize("None");
      return;
    }

    const sizes = filteredMonth.map((pizzaObj) => pizzaObj.size.size);

    const sizeCounts = {};
    sizes.forEach((size) => {
      sizeCounts[size] = (sizeCounts[size] || 0) + 1;
    });

    let maxCount = 0;
    let mostPopularSize = "";

    sizes.forEach((size) => {
      if (sizeCounts[size] > maxCount) {
        maxCount = sizeCounts[size];
        mostPopularSize = size;
      }
    });

    setPopularSize(mostPopularSize);
  }, [filteredMonth]);

  return <h6>Most Popular Size: {popularSize}</h6>;
};
