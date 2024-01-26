import React from "react";

export const OrderFilterBar = ({ handleSortChange }) => {
  return (
    <div>
      <select
        onChange={(e) => handleSortChange(e.target.value)}
        className="btn btn-primary brn-dropwdown"
      >
        <option value="">Filter by...</option>
        <option value="newest">Newest First...</option>
        <option value="oldest">Oldest First...</option>
      </select>
    </div>
  );
};
