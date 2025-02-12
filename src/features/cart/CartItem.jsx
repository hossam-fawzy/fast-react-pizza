import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
        <h1>{pizzaId}</h1>
      </div>
      <UpdateItemQuantity pizzaId={pizzaId} />
      <button
        onClick={() => dispatch(deleteItem(pizzaId))}
        style={{ backgroundColor: "red" }}
      >
        Delete
      </button>
    </li>
  );
}

export default CartItem;
