import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
      <button
        style={{ backgroundColor: "green", marginLeft: "20px" }}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
    </div>
  );
}
