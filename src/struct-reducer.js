
const config = require('./config')();

const structReducer = (typeName, stateChangers, configuration) => (prevState, action) => {
  const splitter = (configuration && configuration.ACTIONS_SPLITTER) || config.ACTIONS_SPLITTER;
  const actionType = action.type.split(splitter);
  if (actionType[0].toLowerCase() === typeName.toLowerCase()) {
    let stateChangerFunction = stateChangers;
    actionType.splice(-1, 1).forEach(item => {
      stateChangerFunction = stateChangerFunction[item];
    });
    return stateChangerFunction(prevState, action);
  }
  return prevState || null;
};

module.exports = structReducer;
