import { call, put, select, take, takeEvery } from "redux-saga/effects";
import fetches from '../../services/index';
import ActionType, { Actions } from '../actions/actions';
import { getToken } from "../reducers/auth";

function* callGetSchedule() {
  yield put(Actions.getScheduleLoad());
  let { token, expires_in } = yield select(getToken);
  if (expires_in < Date.now()) {
    yield put(Actions.refreshToken());
    yield take(Actions.setNewToken);
    const newToken = yield select(getToken);
    token = newToken.token;
    expires_in = newToken.expires_in;
  }
  // @ts-ignore
  const data = yield call(() => (fetches.getScheduleFetch({ token } as Headers)
            .then(res => res)
            .catch(err => err)
    ));
  if (!(data instanceof Error)) {
    yield put(Actions.getScheduleSuccess(data.data));
  } else {
    yield put(Actions.getScheduleError());
  }
}

// @ts-ignore
function* callPostEvent({ payload }) {
  yield put(Actions.postEventLoad());
  let { token, expires_in } = yield select(getToken);
  if (expires_in < Date.now()) {
    yield put(Actions.refreshToken());
    yield take(Actions.setNewToken);
    const newToken = yield select(getToken);
    token = newToken.token;
    expires_in = newToken.expires_in;
  }
  const data = yield call(() => (fetches.postEventFetch({ token, event: payload })
        .then(res => res)
        .catch(err => err)
    ));
  if (data instanceof Error) {
    yield put(Actions.postEventError());
  } else {
    yield put(Actions.postEventSuccess());
    yield put(Actions.getSchedule());
  }
}

export function* watchCallGetSchedule() {
  yield takeEvery(ActionType.GET_SCHEDULE, callGetSchedule);
}

export function* watchCallPostEvent() {
    // @ts-ignore
  yield takeEvery(ActionType.POST_EVENT, callPostEvent);
}
