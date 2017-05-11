
const reduxConnect = require('react-redux').connect;
const actionSelector = require('./action-creators');
const reducerSelector = require('./reducers');

const connect = (actions) => (...args) => Component =>
  reduxConnect(reducerSelector(...args), actionSelector(actions)(...args))(Component);

module.exports = connect;
