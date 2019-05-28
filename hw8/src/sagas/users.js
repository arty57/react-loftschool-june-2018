import { takeEvery, put, call } from 'redux-saga/effects';
import { getUserRequest, getUserSuccess, getUserFailure } from '../ducks/users';
import { getTokenOwner, getUserInformation } from '../api';
import requestFlow from './request';
export function* fetchUserWatch() {
  yield takeEvery(getUserRequest.toString(), fetchUserFlow);
}

function* fetchUserFlow(action) {
  try {
    let result;
    if (action.payload === 'me') {
      result = yield call(requestFlow, getTokenOwner);
    } else {
      result = yield call(requestFlow, getUserInformation, action.payload);
    }
    yield put(getUserSuccess(result.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}
