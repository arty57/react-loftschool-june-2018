import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';
const {
  auth: { authorize, logout }
} = createActions({
  AUTH: {
    AUTHORIZE: null,
    LOGOUT: null
  }
});

const isAuthorized = handleActions(
  {
    [authorize.toString()]: () => true,
    [logout.toString()]: () => false
  },
  false
);

export default combineReducers({ isAuthorized });
const getIsAuthorized = state => state.auth.isAuthorized;

export { authorize, getIsAuthorized, logout };
