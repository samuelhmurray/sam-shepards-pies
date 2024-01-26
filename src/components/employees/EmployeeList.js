import { useEffect, useState } from "react";
import "./Employees.css";
import { getAllEmployees } from "../../Services/employeeServices";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employee-container">
      <h2 className="employee-headline">Employees</h2>
      {employees.map((employeeObj) => {
        return (
          <Link
            to={`/employees/${employeeObj.id}`}
            key={employeeObj.id}
            className="employees"
          >
            <div>
              <div className="employee-id">EmployeeId #: {employeeObj.id}</div>
              <div className="employee-name">Name: {employeeObj.userName}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
