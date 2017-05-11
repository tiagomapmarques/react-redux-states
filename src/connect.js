
const reduxConnect = require('react-redux').connect;
const actionSelector = require('./actions');
const reducerSelector = require('./reducers');

const connect = (actions, configuration) => (...args) => reduxConnect(
  reducerSelector(...args),
  actionSelector(Object.keys(actions).reduce((accumulator, key) => Object.assign({}, accumulator, {
    [configuration.getActionsName(key)]: actions[key],
  }), {}), configuration)(...args)
);

module.exports = connect;
