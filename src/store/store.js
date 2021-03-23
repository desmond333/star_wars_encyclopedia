import { createStore, combineReducers } from 'redux';
import cardsDataReducer from './reducers/cardsDataReducer'

const rootReducer = combineReducers({ //смешиваем все reducer с помощью f combineReducers
  cardsData: cardsDataReducer,
})

export const store = createStore(rootReducer);