import { actionsConstants } from "../constants";

export default {
  ShowLoading: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.appConstants.SHOW_LOADING });
    };
  },
  HideLoading: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.appConstants.HIDE_LOADING });
    };
  }
};