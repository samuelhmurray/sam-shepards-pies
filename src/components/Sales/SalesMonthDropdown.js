import React from "react";

export const SalesMonthDropdown = ({ handleFilter }) => {
  const handleChange = (event) => {
    console.log("Handle Event Fire");
    const selectedMonth = event.target.value;
    handleFilter(selectedMonth);
  };
  return (
    <div>
      <select onChange={handleChange} className="btn btn-warning">
        <option value="">Select Month</option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
    </div>
  );
};
