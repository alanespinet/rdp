import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import moment from 'moment';

import App from './components/App';
import store from './redux/store/store';
import { startSetEntries } from './redux/actions/actions';


let unsubscribe = store.subscribe( () => {
  console.log(store.getState());
} );

unsubscribe();


// data is loading...
const loading = (
  <div className="loading-screen">
    <div className="loading-stuff">
      <p>loading data...</p>
      <img src="/images/loading.gif" alt="loading graphic image" />
    </div>
  </div>
);
ReactDOM.render( loading, document.getElementById('app') );


// data is already loaded
store.dispatch( startSetEntries() )
  .then( () => {
    const jsx = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    ReactDOM.render( jsx, document.getElementById('app') );
  })



// ReactDOM.render( jsx, document.getElementById('app') );
