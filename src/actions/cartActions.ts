import axios from "axios";
import { Dispatch } from "redux";
import { hideLoader, showLoader } from "./loadingActions";
import {
  CALCULATE_TOTALS,
  CLEAR_CART,
  DECREASE_ITEM_COUNT,
  GET_CART_ITEMS,
  INCREASE_ITEM_COUNT,
  REMOVE_CART_ITEM,
} from "../constants";
import { showToast } from "./toastActions";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = () => async (dispatch: Dispatch) => {
  console.log("HELLo");
  try {
    dispatch(showLoader());
    const { data } = await axios(url);
    dispatch(hideLoader());
    dispatch(showToast("Items Fetch Succesfully", true));
    dispatch({
      type: GET_CART_ITEMS,
      payload: data,
    });
  } catch (error) {
    dispatch(hideLoader());
    dispatch(showToast("Something went wrong while fetching items!", false));
    console.log(error);
  }
};

export const increaseCartItemCount = (id: string) => {
  return {
    type: INCREASE_ITEM_COUNT,
    payload: id,
  };
};

export const decreaseCartItemCount = (id: string) => {
  return {
    type: DECREASE_ITEM_COUNT,
    payload: id,
  };
};

export const removeCartItem = (id: string) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const calculateTotals = () => {
  return {
    type: CALCULATE_TOTALS,
  };
};
