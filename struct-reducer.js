
const SPLITTER = '/';

const structReducer = (typeName, stateChangers) => (prevState, action) => {
  const actionType = action.type.split(SPLITTER);
  if (actionType[0].toLowerCase() === typeName.toLowerCase()) {
    let stateChangerFunction = stateChangers;
    actionType.splice(-1, 1).forEach((item) => {
      stateChangerFunction = stateChangerFunction[item];
    });
    return stateChangerFunction(prevState, action);
  }
  return prevState || null;
};

module.exports = structReducer;
