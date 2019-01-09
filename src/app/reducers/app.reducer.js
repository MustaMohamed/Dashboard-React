import { actionsConstants } from "../constants";

const initialState = {
  showLoading: true
};

const appActionsConstants = actionsConstants.appConstants;


export const app = (state = initialState, action) => {
  switch (action.type) {
    
    case appActionsConstants.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case appActionsConstants.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      };
    default:
      return state;
  }
}