import { fork } from 'redux-saga/effects';
import { fetchUserWatch } from './users';
import { authFlow } from './auth.js';
import { fetchFollowersWatch } from './followers';

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
}
