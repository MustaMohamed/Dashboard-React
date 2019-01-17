import { actionsConstants } from '../../constants';

export default  {
  userLogin: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.userConstants.USER_LOGIN_SUCCESS});
    };
  },
  userLogout: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.userConstants.USER_LOGOUT});
    };
  }
}
