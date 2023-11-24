import { HIDE_CONFIRMATION, SHOW_CONFIRMATION } from "../constants";

interface Confirm {
  showConfirm: boolean;
}

const confirmReducer = (
  state: Confirm = { showConfirm: false },
  action: { type: string }
): Confirm => {
  switch (action.type) {
    case SHOW_CONFIRMATION:
      return {
        showConfirm: true,
      };
    case HIDE_CONFIRMATION:
      return {
        showConfirm: false,
      };
    default:
      return state;
  }
};

export default confirmReducer;
