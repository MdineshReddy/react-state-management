import { HIDE_CONFIRMATION, SHOW_CONFIRMATION } from "../constants";

export const showConfirmation = () => {
  return {
    type: SHOW_CONFIRMATION,
  };
};

export const hideConfirmation = () => {
  return {
    type: HIDE_CONFIRMATION,
  };
};
