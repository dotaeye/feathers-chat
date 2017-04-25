import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';

import rootReducer from '../reducers';

const middlewares = [];

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').createLogger();
  middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState, enhancers);
  // install saga run
  store.runSaga = sagaMiddleware.run; // createStoreWithMiddleware 后调用装载 自定义saga
  store.close = () => store.dispatch(END);

  return store;
}
