import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const {
  network: { networkError, clearNetworkErrors }
} = createActions({
  NETWORK: {
    NETWORK_ERROR: null,
    CLEAR_NETWORK_ERRORS: null
  }
});

const error = handleActions(
  {
    [networkError.toString()]: (state, action) => action.payload,
    [clearNetworkErrors.toString()]: (state, action) => null
  },
  null
);

const isError = handleActions(
  {
    [networkError.toString()]: (state, action) => true,
    [clearNetworkErrors.toString()]: (state, action) => false
  },
  null
);

export default combineReducers({ error, isError });

const getNetworkError = state => state.network.error;
const getIsNetworkErrorPresent = state => state.network.isError;
export {
  networkError,
  clearNetworkErrors,
  getNetworkError,
  getIsNetworkErrorPresent
};
