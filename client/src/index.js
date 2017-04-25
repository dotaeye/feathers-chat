import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createRoutes from './routes';
import configureStore from './store';
import rootSaga from './sagas';
import config from './config';
import Storage from './utils/Storage';
import './index.css';

const store = configureStore();
store.runSaga(rootSaga);

Storage.setNamespace(config.storageNameSpace);

const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
