// DropdownComponent.js
import React from "react";

export const EmployeeDropdown = ({ allEmployees }) => {
  const handleDropdownClick = (e) => {
    e.preventDefault();
  };

  return (
    <select className="btn btn-success" onClick={handleDropdownClick}>
      <option value="select a driver/food runner">
        Select a Driver or Foodrunner...
      </option>
      {allEmployees.map((user) => (
        <option key={user.id} value={user.id}>
          {user.userName}
        </option>
      ))}
    </select>
  );
};
