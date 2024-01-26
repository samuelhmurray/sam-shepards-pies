export const getAllPizzas = () => {
  return fetch(
    "http://localhost:8088/pizzas?_expand=size&_expand=sauce&_expand=cheese&_expand=order&_embed=pizzaToppings"
  ).then((res) => res.json());
};

export const getAllPizzaToppings = async () => {
  return await fetch(
    "http://localhost:8088/pizzaToppings?_expand=topping&_expand=pizza"
  ).then((res) => res.json());
};
export const getAllCheeses = async () => {
  return await fetch("http://localhost:8088/cheeses").then((res) => res.json());
};
export const getAllSizes = async () => {
  return await fetch("http://localhost:8088/sizes").then((res) => res.json());
};
export const getAllSauces = async () => {
  return await fetch("http://localhost:8088/sauces").then((res) => res.json());
};
export const getAllToppings = async () => {
  return await fetch("http://localhost:8088/toppings").then((res) =>
    res.json()
  );
};

export const savePizza = async (pizzaObject) => {
  const postOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(pizzaObject),
  };
  let res = await fetch("http://localhost:8088/pizzas", postOptions);
  let pizza = res.json();
  return pizza;
};

export const addNewPizzaToppings = (toppingObj) => {
  return fetch(`http://localhost:8088/pizzaToppings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toppingObj),
  });
};

export const deletePizza = (pizzaId) => {
  return fetch(`http://localhost:8088/pizzas/${pizzaId}`, {
    method: "DELETE",
  });
};

export const getAllPizzasByMonth = () => {
  return fetch(
    "http://localhost:8088/pizzas?_expand=size&_expand=sauce&_expand=cheese&_expand=order&_embed=pizzaToppings"
  ).then((res) => res.json());
};
