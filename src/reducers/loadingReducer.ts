import { HIDE_LOADER, SHOW_LOADER } from "../constants";

interface Loading {
  showLoader: boolean;
}

const loadingReducer = (
  state: Loading = { showLoader: false },
  action: { type: string }
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        showLoader: true,
      };
    case HIDE_LOADER:
      return {
        showLoader: false,
      };
  }
  return state;
};

export default loadingReducer;
