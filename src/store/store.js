import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import people from './reducers/people';
// переименуй по примеру выше
import planetsReducer from './reducers/planetsReducer'

const rootReducer = combineReducers({
  //смешиваем все reducer с помощью f combineReducers
  people,
  planets: planetsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
