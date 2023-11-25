import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./actions/cartActions";
import CartContainer from "./components/CartContainer";
import { RootState } from "./store";
import Confirmation from "./components/Confirmation";
import Loader from "./components/Loader";
import Toast from "./components/Toast";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const { showConfirm } = useSelector((state: RootState) => state.confirm);
  const { showLoader } = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    //@ts-ignore
    dispatch(getCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.cartItems]);

  return (
    <div>
      <Navbar />
      <CartContainer />
      {showConfirm && <Confirmation />}
      {showLoader && <Loader />}
      <Toast />
    </div>
  );
};

export default App;
