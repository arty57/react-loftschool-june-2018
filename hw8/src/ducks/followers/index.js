import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';

const {
  followers: {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
  }
} = createActions({
  FOLLOWERS: {
    FETCH_FOLLOWERS_REQUEST: null,
    FETCH_FOLLOWERS_SUCCESS: null,
    FETCH_FOLLOWERS_FAILURE: null
  }
});

const isFetching = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => true,
    [fetchFollowersSuccess.toString()]: () => false,
    [fetchFollowersFailure.toString()]: () => false
  },
  false
);

const ids = handleActions(
  {
    [fetchFollowersSuccess.toString()]: (_state, action) => action.payload,
    [fetchFollowersRequest.toString()]: () => null
  },
  null
);

const error = handleActions(
  {
    [fetchFollowersFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  ids,
  error
});

const getIsFollowersLoading = state => state.followers.isFetching;
const getFollowersData = state => state.followers.ids;
const getFollowersError = state => state.followers.error;
export {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
  getIsFollowersLoading,
  getFollowersData,
  getFollowersError
};
