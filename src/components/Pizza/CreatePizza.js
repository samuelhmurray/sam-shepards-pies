import { useEffect, useState } from "react";
import {
  getAllToppings,
  getAllSizes,
  getAllCheeses,
  getAllSauces,
  savePizza,
  addNewPizzaToppings,
} from "../../Services/pizzaServices.js";
import { Link, useParams } from "react-router-dom";
import "./CreatePizza.css";

export const CreatePizza = () => {
  const [pizzaSizeArray, setPizzaSizeArray] = useState([]);
  const [cheeseArray, setCheeseArray] = useState([]);
  const [sauceArray, setSauceArray] = useState([]);
  const [toppingsArray, setToppingsArray] = useState([]);
  const [selectedSizeId, setSelectedSizeId] = useState(0);
  const [selectedCheeseId, setSelectedCheeseId] = useState(0);
  const [selectedSauceId, setSelectedSauceId] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [createdPizzaId, setCreatedPizzaId] = useState(0);

  const { orderId } = useParams();

  useEffect(() => {
    getAllSizes().then((res) => {
      setPizzaSizeArray(res);
    });
  }, []);

  useEffect(() => {
    getAllCheeses().then((res) => {
      setCheeseArray(res);
    });
  }, []);

  useEffect(() => {
    getAllSauces().then((res) => {
      setSauceArray(res);
    });
  }, []);

  useEffect(() => {
    getAllToppings().then((res) => {
      setToppingsArray(res);
    });
  }, []);

  const handleToppingChange = (topping) => {
    setSelectedToppings((prevArray) => {
      if (prevArray.includes(topping)) {
        return prevArray.filter((item) => item !== topping);
      } else {
        return [...prevArray, topping];
      }
    });
  };

  useEffect(() => {
    if (createdPizzaId !== 0) {
      selectedToppings.map((topping) => {
        const pizzaToppingsObj = {
          pizzaId: createdPizzaId,
          toppingId: topping.id,
        };
        return addNewPizzaToppings(pizzaToppingsObj);
      });
    }
  }, [createdPizzaId, selectedToppings]);

  const handleAddButtonClick = async (event) => {
    event.preventDefault();
    const pizzaObject = {
      sizeId: selectedSizeId,
      cheeseId: selectedCheeseId,
      sauceId: selectedSauceId,
      orderId: parseInt(orderId),
    };
    await savePizza(pizzaObject).then((res) => {
      setCreatedPizzaId(res.id);
    });
  };

  return (
    <form className="pizzas text-light">
      <h2>Create Pizza</h2>
      <div className="pizza-container">
        <div className="pizza-dropdowns">
          <fieldset>
            <div className="form-group">
              <label>Size</label>
              <select
                onChange={(event) => {
                  setSelectedSizeId(parseInt(event.target.value));
                }}
                name="sizes"
              >
                <option id="0" value={0}>
                  Choose size
                </option>
                {pizzaSizeArray.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.size}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Cheese</label>
              <select
                onChange={(event) => {
                  setSelectedCheeseId(parseInt(event.target.value));
                }}
                name="cheeses"
              >
                <option id="0" value={0}>
                  Choose cheese
                </option>
                {cheeseArray.map((cheese) => (
                  <option key={cheese.id} value={cheese.id}>
                    {cheese.cheese}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Sauce</label>
              <select
                onChange={(event) => {
                  setSelectedSauceId(parseInt(event.target.value));
                }}
                name="sauces"
              >
                <option id="0" value={0}>
                  Choose sauce
                </option>
                {sauceArray.map((sauce) => (
                  <option key={sauce.id} value={sauce.id}>
                    {sauce.sauce}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
        </div>
        <fieldset className="toppings">
          <div className="toppings-list">
            <h4>Select Toppings</h4>
            {toppingsArray.map((topping) => (
              <div key={topping.id} className="topping-option">
                <input
                  type="checkbox"
                  name="topping"
                  value={topping.id}
                  onChange={() => {
                    handleToppingChange(topping);
                  }}
                />
                <label htmlFor={`topping${topping.id}`}>{topping.name}</label>
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <button className="add-button" onClick={handleAddButtonClick}>
            Add to Order
          </button>
        </fieldset>
        <fieldset>
          <div>
            <Link to={`/orders/${orderId}`}>
              <button className="checkout-button">Checkout</button>
            </Link>
          </div>
        </fieldset>
      </div>
    </form>
  );
};
