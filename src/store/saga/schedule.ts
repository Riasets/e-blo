import {takeEvery} from "redux-saga";
import {call, put, select} from "redux-saga/effects";
import fetches from '../../services/index';
import ActionType, {Actions} from '../actions/actions';
import {getToken} from "../reducers/auth";

function* callGetSchedule(){
    yield put(Actions.getScheduleLoad());
    let {token, expires_in} = yield select(getToken);
    if (expires_in < Date.now()){
        yield put(Actions.refreshToken());
        token = yield select(getToken);
    }
    // @ts-ignore
    const data = yield call(()=>(fetches.getScheduleFetch({token: token} as Headers)
            .then( res => res.json())
            .catch( err => err.json())
    ));
    if (data.error) {
        yield put(Actions.getScheduleError());
    } else {
        yield put(Actions.getScheduleSuccess(data));
    }
}

// @ts-ignore
function* callPostEvent({payload}){
    yield put(Actions.postEventLoad());
    let {token, expires_in} = yield select(getToken);
    if (expires_in < Date.now()){
        yield put(Actions.refreshToken());
        const newToken = yield select(getToken);
        token = newToken.token;
    }
    const data = yield call(() => (fetches.postEventFetch({...payload, token: token})
        .then(res => res.json())
        .catch(err => err.json())
    ));
    if (data.error){
        yield put(Actions.postEventError());
    } else {
        yield put(Actions.postEventSuccess());
        yield put(Actions.getSchedule());
    }
}

export function* watchCallGetSchedule() {
    yield takeEvery(ActionType.GET_SCHEDULE, callGetSchedule)
}

export function* watchCallPostEvent() {
    // @ts-ignore
    yield takeEvery(ActionType.POST_EVENT, callPostEvent)
}