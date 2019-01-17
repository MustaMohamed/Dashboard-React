import { appActions } from '.';

import { actionsConstants } from '../../constants';


import { quizzesService } from '../../services';

export default {
  getAllQuizzes: () => dispatch => {
    quizzesService.getAllQuizzes ().then (response => {
        dispatch (appActions.hideLoading ());
        dispatch (() => ({
          type: actionsConstants.quizzesConstants.GET_ALL_QUIZZES,
          allQuizzes: response.announcements
        }));
      })
      .catch ();
  },
  getLatestQuizzes: () => dispatch => {
    quizzesService.getAllQuizzes ().then (response => {
        dispatch (appActions.hideLoading ());
        dispatch (() => ({
          type: actionsConstants.quizzesConstants.GET_LATEST_QUIZZES,
          latestQuizzes: response.announcements
        }));
      })
      .catch ();
  }
};