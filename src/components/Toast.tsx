import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
import { useEffect } from "react";

const Toast = () => {
  const { msg, success } = useSelector((state: RootState) => state.toast);

  const notify = (msg: string | undefined, success: boolean) => {
    if (success) {
      toast.success(msg, {
        position: "top-right",
      });
    } else {
      toast.error(msg, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    // @ts-ignore
    notify(msg, success);
  }, [msg]);

  return (
    <div className="App">
      <ToastContainer />
    </div>
  );
};

export default Toast;
