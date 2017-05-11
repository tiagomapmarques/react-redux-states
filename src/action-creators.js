const suffix = require('./constants').ACTIONS_SUFFIX;

const actionsToDispatchables = (actionsObject, dispatch) => Object.keys(actionsObject)
  .reduce((accumulator, key) => Object.assign({}, accumulator, {
    [key]: (...args) => dispatch(actionsObject[key](...args)),
  }), {});

const actionSelector = (actions) => (...args) => dispatch => {
  const selected = Object.keys(actions)
    .filter(key => args.indexOf(key.substring(0, key.length - suffix.length)) >= 0)
    .reduce((accumulator, key) => Object.assign({}, accumulator, {
      [key]: actionsToDispatchables(actions[key], dispatch),
    }), {});
  Object.keys(selected).forEach(item => {
    selected[item].init && typeof selected[item].init === 'function' && selected[item].init();
  });
  return selected;
};

module.exports = actionSelector;
