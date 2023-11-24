import { HIDE_TOAST, SHOW_TOAST } from "../constants";

interface Toast {
  success?: boolean;
  msg?: string;
}

const toastReducer = (
  state: Toast = {},
  action: { type: string; payload: { success: boolean; msg?: string } }
) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        success: action.payload.success,
        msg: action.payload.msg,
      };
    case HIDE_TOAST:
      return {};
  }
  return state;
};

export default toastReducer;
