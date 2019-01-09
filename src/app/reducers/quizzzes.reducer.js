import { actionsConstants } from "../constants";

const quizzesActionsConstants = actionsConstants.quizzesConstants;

const initialState = {
  quizzes: []
};

export const quizzes = (state = initialState, action) => {
  switch (action.type) {
    case quizzesActionsConstants.GET_ALL_QUIZZES:
      return {
        ...state,
        quizzes: action.allQuizzes
      };
    case quizzesActionsConstants.GET_LATEST_QUIZZES:
      return {
        ...state,
        quizzes: action.latestQuizzes
      };
    default:
      return state;
  }
};