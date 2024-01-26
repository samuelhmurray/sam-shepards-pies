import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Employees.css";
import { getEmployeeById } from "../../Services/employeeServices";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <section>
      <h2>Employee Details</h2>
      <div className="employee-details">
        <div className="detail-name">
          <span>Name: </span>
          {employee.userName}
        </div>
        <div className="employee-info-container">
          <div className="employee-info">
            <span>Address: </span>
            {employee.address}
          </div>
          <div className="employee-info">
            <span>Phone Number: </span>
            {employee.phoneNumber}
          </div>
          <div className="employee-info">
            <span>Email: </span>
            {employee.email}
          </div>
        </div>
        <div className="btn">
          {/*Make functionality for the update button
            when clicked user will navigate to the EmployeeForm to edit*/}
          <Link to={`/employees/${employeeId}/employeeEdit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
