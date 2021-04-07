import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { people, planets, species, films, search } from './reducers';

const rootReducer = combineReducers({
  people,
  planets,
  species,
  films,
  search,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
