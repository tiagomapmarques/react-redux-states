
const splitter = require('./config').configuration.ACTION_SPLITTER;

const structReducer = (typeName, stateChangers) => (prevState, action) => {
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
