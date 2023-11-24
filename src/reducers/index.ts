import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loadingReducer from "./loadingReducer";
import toastReducer from "./toastReducer";
import confirmReducer from "./confirmReducer";

export default combineReducers({
  cart: cartReducer,
  loading: loadingReducer,
  toast: toastReducer,
  confirm: confirmReducer,
});
