import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import peopleRr from './reducers/peopleRr';
// переименуй по примеру выше
import planetsRr from './reducers/planetsRr'

const rootReducer = combineReducers({
  //смешиваем все reducer с помощью f combineReducers
  people: peopleRr,
  planets: planetsRr,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
