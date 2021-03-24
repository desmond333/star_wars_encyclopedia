import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

import cardsDataReducer from './reducers/cardsDataReducer'

const rootReducer = combineReducers({ //смешиваем все reducer с помощью f combineReducers
  cardsData: cardsDataReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));