
const reduxConnect = require('react-redux').connect;
const constants = require('./constants');
const actionSelector = require('./action-creators');
const reducerSelector = require('./reducers');
const createStore = require('./store');

const connect = (actions) => (...args) => Component =>
  reduxConnect(reducerSelector(...args), actionSelector(actions)(...args))(Component);

module.exports = { connect, createStore, constants };
