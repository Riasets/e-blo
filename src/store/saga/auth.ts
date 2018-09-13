import {takeEvery} from "redux-saga";
import {call, put} from "redux-saga/effects";
import fetches from '../../services/index';
import ActionType, {Actions} from '../actions/actions';

// @ts-ignore
function* callLogin({payload}){
        yield put(Actions.loginLoad());
        const data = yield call(() => (fetches.loginFetch(payload)
            .then( res => res.json())
            .catch(err => err)));
        if (data.error){
            yield put(Actions.loginError(data.error));
        } else {
            yield put(Actions.loginSuccess(data));
        }
}

// @ts-ignore
function* callRegister({payload}) {
        (console as any).log(payload);
        yield put(Actions.registerLoad());
        const data = yield call(() => (fetches.registerUserFetch(payload)
            .then(res => res.json())
            .catch(err => err)));
        if (data.error){
            yield put(Actions.registerError(data.error));
        } else {
            yield put(Actions.registerSuccess());
        }
}

export function* watchCallLogin() {
    // @ts-ignore
    yield takeEvery(ActionType.LOGIN, callLogin)
}

export function* watchCallRegister() {
    // @ts-ignore
    yield takeEvery(ActionType.REGISTER, callRegister)
}