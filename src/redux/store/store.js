import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries';

const store = createStore(
  combineReducers({
    entriesReducer
  })
);

export default store;
