import { actionsConstants } from "../constants";

export default  {
  UserLogin: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.userConstants.USER_LOGIN_SUCCESS});
    };
  },
  UserLogout: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.userConstants.USER_LOGOUT});
    };
  }
}
