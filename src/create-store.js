const redux = require('redux');
const reduxCreateStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;

const middleware = [ thunk ];
if (window && window.devToolsExtension && typeof window.devToolsExtension === 'function') {
  middleware.push(window.devToolsExtension());
}

const createStore = (reducersObject, storeReplacer) => (initialState) => {
  const reducers = combineReducers(reducersObject);
  const store = reduxCreateStore(reducers, initialState, applyMiddleware(...middleware));
  if (storeReplacer && typeof storeReplacer === 'function') {
    return storeReplacer(store);
  }
  return store;
};

module.exports = createStore;
