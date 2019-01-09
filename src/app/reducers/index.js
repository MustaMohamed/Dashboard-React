import { combineReducers } from 'redux';

import { app } from './app.reducer';
import { announcements } from "./announcement.reducer";
import { quizzes } from './quizzzes.reducer';

import { user } from './user.reducer';


const rootReducer = combineReducers ({
  app,
  announcements,
  quizzes,
  user
});

export default rootReducer;