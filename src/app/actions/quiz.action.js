import { AppActions } from "./";

import { actionsConstants } from "../constants";


import { QuizService } from '../services';

export default {
  getAllQuizzes: () => dispatch => {
    QuizService.getAllQuizzes ().then (response => {
        dispatch (AppActions.HideLoading ());
        dispatch (() => ({
          type: actionsConstants.quizzesConstants.GET_ALL_QUIZZES,
          allQuizzes: response.announcements
        }));
      })
      .catch (err => console.log (err));
  },
  getLatestQuizzes: () => dispatch => {
    QuizService.getAllQuizzes ().then (response => {
        dispatch (AppActions.HideLoading ());
        dispatch (() => ({
          type: actionsConstants.quizzesConstants.GET_LATEST_QUIZZES,
          latestQuizzes: response.announcements
        }));
      })
      .catch (err => console.log (err));
  }
};