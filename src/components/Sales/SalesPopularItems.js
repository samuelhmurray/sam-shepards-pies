import React from "react";
import { PopularSizeSales } from "./PopularSizeSales.js";
import { PopularCheeseSales } from "./PopularCheeseSales.js";
import { PopularSauceSales } from "./PopularSauceSales.js";
import { PopularToppingSales } from "./PopularToppingSales.js";

export const SalesPopularItems = ({ filteredMonth }) => {
  return (
    <section className="popular-items-container">
      <h4>🍅🍕Popular Items🍕🍅</h4>
      <h6 className="popular-item">
        <PopularSizeSales filteredMonth={filteredMonth} />
      </h6>
      <h6 className="popular-item">
        <PopularCheeseSales filteredMonth={filteredMonth} />
      </h6>
      <h6 className="popular-item">
        <PopularSauceSales filteredMonth={filteredMonth} />
      </h6>
      <h6 className="popular-item">
        {/* <PopularToppingSales filteredMonth={filteredMonth} /> */}
      </h6>
    </section>
  );
};
