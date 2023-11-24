import React from "react";
import { hideConfirmation } from "../actions/confirmActions";
import { clearCart } from "../actions/cartActions";
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
              dispatch(hideConfirmation());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(hideConfirmation());
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
