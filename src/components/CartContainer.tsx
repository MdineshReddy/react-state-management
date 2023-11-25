import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { showConfirm } from "../features/confirmSlice";
import { RootState } from "../store";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${Number(total).toFixed(2)}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(showConfirm())}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
