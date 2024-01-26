export const getAllEmployees = () => {
  return fetch(" http://localhost:8088/users").then((res) => res.json());
};

export const getEmployeeById = (userId) => {
  return fetch(`http://localhost:8088/users?id=${userId}`).then((res) =>
    res.json()
  );
};

export const updateEmployee = (employee) => {
  return fetch(`http://localhost:8088/users/${employee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
};

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};
