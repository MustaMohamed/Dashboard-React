import { actionsConstants } from "../constants";

const initialState = {
  user: null
};

const userActionsConstants = actionsConstants.userConstants;


export const user = (state = initialState, action) => {
  switch (action.type) {
    case userActionsConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          userName: 'Mustafa Mohamed'
        }
      };
    case userActionsConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};