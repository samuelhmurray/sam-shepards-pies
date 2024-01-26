import { useState } from "react";
import { addNewOrder } from "../../Services/orderServices";
import { Link, useNavigate } from "react-router-dom";

export const CreateOrder = ({ currentUser }) => {
  const [delivery, setDelivery] = useState(null);
  const [tableId, setTableId] = useState(0);
  const [tip, setTip] = useState(0);

  const navigate = useNavigate();

  const handleCreateOrderClick = async () => {
    const orderObj = {
      delivery: delivery,
      tip: tip,
      tableId: tableId,
      datePlaced: new Date(),
      userId: currentUser.id,
    };
    
    await addNewOrder(orderObj).then((res) => {
      navigate(`${res.id}/createPizza`);
    });
  };

  return (
    <div className="create-container">
      <h1>Create Order</h1>
      <div className="delivery">
        <h3>Delivery?</h3>
        <label htmlFor="yes">
          Yes
          <br />
          <input
            id="yes"
            type="radio"
            name="delivery"
            value="true"
            onChange={() => {
              setDelivery(true);
            }}
          />
        </label>
        <label htmlFor="no">
          No
          <br />
          <input
            id="no"
            type="radio"
            name="delivery"
            value="false"
            onChange={() => {
              setDelivery(false);
            }}
          />
        </label>
      </div>

      {/* Render the address input only if delivery is set to "Yes" */}
      {delivery === true && (
        <div className="address-container">
          <h3>Address:</h3>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Input Delivery Address"
            onChange={(event) => {
              setTip(parseInt(event.target.value));
            }}
          />
        </div>
      )}
      {/* Render the tableId dropdown only if delivery is set to "No" */}
      {delivery === false && (
        <div className="tables-container">
          <h3>Table Id:</h3>
          <select
            id="tables"
            onChange={(event) => {
              setTableId(parseInt(event.target.value));
            }}
          >
            <option value="0">Choose table id </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      )}

      <div className="tips-container">
        <h3>Tip:</h3>
        <input
          id="tips"
          type="number"
          name="tip"
          placeholder="Input Tip Amount"
          onChange={(event) => {
            setTip(parseInt(event.target.value));
          }}
        />
      </div>
      <div className="btn-container">
        <button onClick={handleCreateOrderClick}>Add Pizza</button>
      </div>
    </div>
  );
};
