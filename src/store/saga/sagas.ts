import { all, fork } from "redux-saga/effects";
import { watchCallLogin, watchCallRefreshToken, watchCallRegister } from "./auth";
import { watchCallGetSchedule, watchCallPostEvent } from "./schedule";

export default function* rootSaga() {
  yield all([
    fork(watchCallLogin),
    fork(watchCallRegister),
    fork(watchCallGetSchedule),
    fork(watchCallPostEvent),
    fork(watchCallRefreshToken),
  ]);
}
