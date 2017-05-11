
export const reducerSelector = (...args) => state => Object.keys(state)
  .filter(key => args.indexOf(key) >= 0)
  .reduce((accumulator, key) => Object.assign({}, accumulator, { [key]: state[key] }), {});
