import { call, put, select, takeEvery } from "redux-saga/effects";
import fetches from '../../services/index';

import ActionType, { Actions } from '../actions/actions';

import { getStatusRefreshingToken, getRefreshToken } from "../reducers/auth";

// @ts-ignore
function* callLogin({ payload }) {
  yield put(Actions.loginLoad());
  const data = yield call(() => (fetches.loginFetch(payload)
  .then(res => res.json())
  .catch(err => err)));
  if (data instanceof Error) {
    yield put(Actions.loginError(data.message));
  } else {
    yield put(Actions.loginSuccess({ ...data, expires_in: Date.now() + 35000 }));
  }
}

// @ts-ignore
function* callRegister({ payload }) {
  yield put(Actions.registerLoad());
  const data = yield call(() => (fetches.registerUserFetch(payload)
            .then(res => res.json())
            .catch(err => err)));
  if (data instanceof Error) {
    yield put(Actions.registerError(data.message));
  } else {
    yield put(Actions.registerSuccess());
  }
}

function* callRefreshToken() {
  if (!(yield select(getStatusRefreshingToken))) {
    yield put(Actions.tokenIsRefreshing());
    const { token } = yield select(getRefreshToken);
    const data = yield call(() => (fetches.refreshTokenFetch(token)
            .then(res => res.json())
            .catch(err => err)));
    if (data.status === 200) {
      yield put(Actions.setNewToken({ ...data, expires_in: Date.now() + 35000 }));
    } else {
      yield put(Actions.logoutAuth());
      yield put(Actions.logoutSchedule());
    }
  }
}

export function* watchCallLogin() {
    // @ts-ignore
  yield takeEvery(ActionType.LOGIN, callLogin);
}

export function* watchCallRegister() {
    // @ts-ignore
  yield takeEvery(ActionType.REGISTER, callRegister);
}

export function* watchCallRefreshToken() {
  yield takeEvery(ActionType.REFRESH_TOKEN, callRefreshToken);
}
