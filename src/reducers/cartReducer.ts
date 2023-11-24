import { CartItem } from "../cartItems";
import {
  CALCULATE_TOTALS,
  CLEAR_CART,
  DECREASE_ITEM_COUNT,
  GET_CART_ITEMS,
  INCREASE_ITEM_COUNT,
  REMOVE_CART_ITEM,
} from "../constants";

interface Cart {
  cartItems: CartItem[];
  amount: number;
  total: number;
}

const cartReducer = (
  state: Cart = {
    amount: 0,
    total: 0,
    cartItems: [],
  },
  action: { type: String; payload?: any }
): Cart => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItem) => {
          if (item.id === action.payload) {
            ++item.amount;
          }
          return item;
        }),
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItem) => {
          if (item.id === action.payload) {
            --item.amount;
          }
          return item;
        }),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: CartItem) => item.id !== action.payload
        ),
      };
    case CALCULATE_TOTALS: {
      let total = 0;
      let amount = 0;

      for (let i of state.cartItems) {
        amount += i.amount;
        total += i.amount * Number(i.price);
      }
      return { ...state, total, amount };
    }

    default:
      return state;
  }
};

export default cartReducer;
