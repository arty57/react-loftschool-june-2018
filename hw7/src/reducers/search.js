import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const results = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => {
      return action.payload;
    }
  },
  []
);

const loadingState = handleActions(
  {
    [searchRequest.toString()]: (_state, action) => {
      return LOADING_STATE.loading;
    },
    [searchSuccess.toString()]: (_state, action) => {
      return LOADING_STATE.success;
    },
    [searchFailure.toString()]: (_state, action) => {
      return LOADING_STATE.failure;
    }
  },
  LOADING_STATE.idle
);

const error = handleActions(
  {
    [searchFailure.toString()]: (_state, action) => {
      return action.payload;
    }
  },
  null
);
export default combineReducers({
  results,
  loadingState,
  error
});
