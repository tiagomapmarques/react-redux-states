import { connect as reduxConnect } from 'react-redux';

import { actionSelector, ACTIONS_SUFFIX as suffix } from './action-creators';
import { reducerSelector } from './reducers';

export { createStore } from './store';

export const ACTIONS_SUFFIX = suffix;

export const connect = (actions) => (...args) => Component =>
  reduxConnect(reducerSelector(...args), actionSelector(actions)(...args))(Component);
