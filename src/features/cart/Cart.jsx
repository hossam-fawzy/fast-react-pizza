import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, {userName}</h2>
      {cart.map((item) => (
        <CartItem key={item.pizzaId} item={item} />
      ))}
      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
