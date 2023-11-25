import React from "react";
import { hideConfirm } from "../features/confirmSlice";
import { clearCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Confirmation = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(hideConfirm());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(hideConfirm());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Confirmation;
