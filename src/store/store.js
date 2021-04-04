import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import peopleRr from './reducers/peopleRr';
import planetsRr from './reducers/planetsRr';
import speciesRr from './reducers/speciesRr';
import filmsRr from './reducers/filmsRr';
import searchRr from './reducers/searchRr';

const rootReducer = combineReducers({
  //смешиваем все reducer с помощью f combineReducers
  people: peopleRr,
  planets: planetsRr,
  species: speciesRr,
  films: filmsRr,
  search: searchRr,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
