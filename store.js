import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [ thunk ];
if (window.devToolsExtension) {
  middleware.push(window.devToolsExtension());
}

export const createStore = (reducersObject, storeReplacer) => (initialState) => {
  const reducers = combineReducers(reducersObject);
  const store = reduxCreateStore(reducers, initialState, applyMiddleware(...middleware));
  if (storeReplacer && typeof storeReplacer === 'function') {
    return storeReplacer(store);
  }
  return store;
};
