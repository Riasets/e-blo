import {all, fork} from "redux-saga/effects";
import { watchCallLogin, watchCallRegister} from "./auth";

export default function* rootSaga(){
    yield all([
        fork(watchCallLogin),
        fork(watchCallRegister),
    ]);
}