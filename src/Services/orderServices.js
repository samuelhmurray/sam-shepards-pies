export const getAllOrders = () => {
  return fetch("http://localhost:8088/orders").then((res) => res.json());
};

export const getOrderByOrderId = (orderId) => {
  return fetch(
    `http://localhost:8088/orders?id=${orderId}&_embed=pizzas&_embed=pizzaToppings`
  ).then((res) => res.json());
};

export const addNewOrder = (orderObj) => {
  return fetch(`http://localhost:8088/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderObj),
  }).then((res) => res.json());
};

export const deleteOrder = (orderId) => {
  return fetch(`http://localhost:8088/orders/${orderId}`, {
    method: "DELETE",
  });
};
