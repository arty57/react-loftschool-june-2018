import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';

const {
  users: { getUserRequest, getUserSuccess, getUserFailure }
} = createActions({
  USERS: {
    GET_USER_REQUEST: null,
    GET_USER_SUCCESS: null,
    GET_USER_FAILURE: null
  }
});

const isFetching = handleActions(
  {
    [getUserRequest.toString()]: (state, action) => true,
    [getUserSuccess.toString()]: (state, action) => false,
    [getUserFailure.toString()]: (state, action) => false
  },
  false
);

const isFetched = handleActions(
  {
    [getUserRequest.toString()]: (state, action) => false,
    [getUserSuccess.toString()]: (state, action) => true,
    [getUserFailure.toString()]: (state, action) => false
  },
  false
);

const data = handleActions(
  {
    [getUserSuccess.toString()]: (state, action) => action.payload,
    [getUserRequest.toString()]: (state, action) => null
  },
  null
);

const error = handleActions(
  {
    [getUserFailure.toString()]: (state, action) => action.payload
  },
  null
);

export default combineReducers({ isFetching, isFetched, data, error });
const getIsFetching = state => state.users.isFetching;
const getIsFetched = state => state.users.isFetched;
const getUserData = state => state.users.data;
const getUserError = state => state.users.error;
export {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getIsFetching,
  getIsFetched,
  getUserData,
  getUserError
};
