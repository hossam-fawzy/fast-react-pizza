import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className="bg-stone-800 text-stone-200 uppercase">
      <p className="text-stone-300 font-semibold space-x-4">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
