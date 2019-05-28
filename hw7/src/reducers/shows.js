import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from '../actions/show';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const loadingState = handleActions(
  {
    [getShowRequest.toString()]: (_state, action) => {
      return LOADING_STATE.loading;
    },
    [getShowSuccess.toString()]: (_state, action) => {
      return LOADING_STATE.success;
    },
    [getShowFailure.toString()]: (_state, action) => {
      return LOADING_STATE.failure;
    }
  },
  LOADING_STATE.idle
);

const list = handleActions(
  {
    [getShowSuccess.toString()]: (_state, action) => {
      console.log('apply new data');
      return [..._state, action.payload];
    }
  },
  []
);

const error = handleActions(
  {
    [getShowFailure.toString()]: (_state, action) => {
      return action.payload;
    }
  },
  null
);
export default combineReducers({
  list,
  loadingState,
  error
});
