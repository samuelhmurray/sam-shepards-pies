import React, { useState, useEffect } from "react";
import { getAllPizzas } from "../../Services/pizzaServices.js";
import { Pizza } from "./Pizza.js";
import { useNavigate, useParams } from "react-router-dom";

export const PizzaList = ({ pizza, baseOrderCost }) => {
  const [allPizzas, setAllPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizza] = useState([]);
  const [totalCost, setTotalCost] = useState(baseOrderCost);
  const [numToppings, setNumToppings] = useState(0);

  const { orderId } = useParams();

  const navigate = useNavigate();

  const getAndSetPizzas = () => {
    getAllPizzas().then(setAllPizzas);
  };

  useEffect(() => {
    getAndSetPizzas();
  }, []);

  useEffect(() => {
    setFilteredPizza(
      allPizzas.filter((pizza) => pizza.orderId === parseInt(orderId))
    );
  }, [allPizzas]);

  useEffect(() => {
    let cost = totalCost;

    filteredPizzas.forEach((pizza) => {
      console.log(totalCost);

      setTotalCost((cost += pizza.size.cost));
    });
  }, [filteredPizzas]);

  const getNumToppings = (num) => {
    setNumToppings(numToppings + num);
  };

  return (
    <div className="pizzas-container">
      <h2 className="text-light">Pizza</h2>
      <article className="orders text-light">
        {filteredPizzas.map((pizzaObj) => (
          <div>
            <Pizza
              getNumToppings={getNumToppings}
              pizza={pizzaObj}
              key={pizzaObj.id}
              getAndSetPizzas={getAndSetPizzas}
            />
          </div>
        ))}
        <button
          className="btn btn-lg btn-success"
          onClick={() => {
            navigate(`createPizza`);
          }}
        >
          Add a new pizza!
        </button>
      </article>
      <div>Total order cost: {totalCost + numToppings * 0.5}</div>
    </div>
  );
};
