import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import moment from 'moment';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './components/App';
import store from './redux/store/store';

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
