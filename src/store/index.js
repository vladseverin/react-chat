import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleWare from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware),
    );
  }

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
      loggerMiddleWare,
    )),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

