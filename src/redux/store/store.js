import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import entriesReducer from '../reducers/entries';
import filtersReducer from '../reducers/filters';

const store = createStore(
  combineReducers({
    entriesReducer,
    filtersReducer
  }),
  applyMiddleware(thunk)
);

export default store;
