import { actionsConstants } from '../../constants';

export default {
  showLoading: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.appConstants.SHOW_LOADING });
    };
  },
  hideLoading: () => {
    return (dispatch) => {
      dispatch ({ type: actionsConstants.appConstants.HIDE_LOADING });
    };
  }
};