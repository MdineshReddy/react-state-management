import { SHOW_TOAST, HIDE_TOAST } from "../constants";

export const showToast = (msg: string, success: boolean) => {
  return {
    type: SHOW_TOAST,
    payload: {
      msg,
      success,
    },
  };
};

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};
