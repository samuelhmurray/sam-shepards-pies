import { useEffect, useState } from "react";
import "./forms.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployee,
} from "../../Services/employeeServices";

export const EditEmployeeForm = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  const handleInputChange = (event) => {
    const stateCopy = { ...employee };
    stateCopy[event.target.name] = event.target.value;
    setEmployee(stateCopy);
  };

  const handleSaveEditClick = (event) => {
    event.preventDefault(event);

    const editedEmployee = {
      id: employee.id,
      isAdmin: employee.isAdmin,
      userName: employee.userName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      address: employee.address,
    };

    updateEmployee(editedEmployee).then(() => {
      navigate(`/employees/${employeeId}`);
    });
  };

  return (
    <form>
      <h2 className="edit-header">Edit Employee</h2>
      <div className="edit-container">
        <h3 className="edit-name">{employee.userName}</h3>
        <fieldset>
          <div>
            <h4>Address: </h4>
            <input
              type="text"
              value={employee.address ? employee.address : ""}
              name="address"
              required
              autoComplete="on"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <h4>Phone Number: </h4>
            <input
              type="text"
              value={employee.phoneNumber ? employee.phoneNumber : ""}
              name="phoneNumber"
              required
              autoComplete="on"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <h4>Email: </h4>
            <input
              type="text"
              value={employee.email ? employee.email : ""}
              name="email"
              required
              autoComplete="on"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="save-btn">
            <button onClick={handleSaveEditClick}>Save</button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};
