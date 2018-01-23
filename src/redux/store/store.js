import { createStore } from 'redux';
import entriesReducer from '../reducers/entries';

const store = createStore( entriesReducer );

export default store;
