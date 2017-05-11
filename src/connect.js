
const reduxConnect = require('react-redux').connect;
const actionSelector = require('./actions');
const reducerSelector = require('./reducers');

const connect = (actions, configuration) => (...args) =>
  reduxConnect(reducerSelector(...args), actionSelector(actions, configuration)(...args));

module.exports = connect;
