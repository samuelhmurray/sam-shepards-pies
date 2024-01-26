import React, { useEffect, useState } from "react";
import { deletePizza, getAllToppings } from "../../Services/pizzaServices.js";
import { getAllPizzaToppings } from "../../Services/pizzaServices.js";

export const Pizza = ({ pizza, getNumToppings, getAndSetPizzas }) => {
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [pizzaCost, setPizzaCost] = useState(0);

  useEffect(() => {
    getAllPizzaToppings().then((toppingsArray) => {
      const toppingsForPizza = toppingsArray.filter(
        (topping) => topping.pizzaId === pizza.id
      );
      setPizzaToppings(toppingsForPizza);
      console.log(pizzaToppings);
    });
  }, [pizza.id]);

  useEffect(() => {
    getNumToppings(pizzaToppings.length);
  }, [pizzaToppings]);

  const cost = pizza.size.cost + pizzaToppings.length * 0.5;

  const handleDeletePizza = () => {
    deletePizza(pizza.id).then(() => {
      getAndSetPizzas();
    });
  };

  return (
    <section className="order">
      <header className="order-info">Pizza #: {pizza.id}</header>
      <div>Size: {pizza.size.size}</div>
      <div>Sauce: {pizza.sauce.sauce}</div>
      <div>Cheese: {pizza.cheese.cheese}</div>
      <div>
        Toppings:{" "}
        {pizzaToppings.map((pTopping) => pTopping.topping.name).join(", ")}{" "}
      </div>
      <div>Total Cost: ${cost} </div>
      <div>
        <button className="btn btn-success btn-lg">Edit Pizza</button>
      </div>
      <div>
        <button onClick={handleDeletePizza} className="btn btn-danger btn-lg">
          Remove Pizza
        </button>
      </div>
    </section>
  );
};
