import { createStore, combineReducers } from 'redux';
import cardsReducer from './reducers/cardsDataReducer'

let reducers = combineReducers({ //смешиваем все reducer с помощью f combineReducers
  cardsData: cardsReducer,
})

let store = createStore(reducers);

export default store;