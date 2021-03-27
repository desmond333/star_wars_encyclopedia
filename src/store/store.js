import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import peopleReducer from './reducers/peopleReducer';
import planetsReducer from './reducers/planetsReducer'

const rootReducer = combineReducers({
  //смешиваем все reducer с помощью f combineReducers
  people: peopleReducer,
  planets: planetsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
