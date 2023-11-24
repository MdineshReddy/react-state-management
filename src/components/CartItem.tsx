import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import {
  increaseCartItemCount,
  decreaseCartItemCount,
  removeCartItem,
} from "../actions/cartActions";
import { CartItem as CartItemInterface } from "../cartItems";

const CartItem: React.FC<CartItemInterface> = ({
  id,
  img,
  title,
  price,
  amount,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeCartItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseCartItemCount(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeCartItem(id));
            } else {
              dispatch(decreaseCartItemCount(id));
            }
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
