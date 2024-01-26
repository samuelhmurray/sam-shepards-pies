import { useEffect, useState } from "react";
import { EmployeeViews } from "./EmployeeViews.js";
import { AdminViews } from "./AdminViews.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPizzaUser = localStorage.getItem("pizza_user");
    const pizzaUserObject = JSON.parse(localPizzaUser);

    setCurrentUser(pizzaUserObject);
  }, []);

  return currentUser?.isAdmin ? (
    <AdminViews currentUser={currentUser} />
  ) : (
    <EmployeeViews currentUser={currentUser} />
  );
};
