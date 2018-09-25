import {call, put, select,takeEvery} from "redux-saga/effects";
import fetches from '../../services/index';

import ActionType, {Actions} from '../actions/actions';

import {getStatusRefreshingToken,getToken} from "../reducers/auth";



// @ts-ignore
function* callLogin({payload}){
        yield put(Actions.loginLoad());
        const data = yield call(() => (fetches.loginFetch(payload)
            .then( res => res.json())
            .catch(err => err)));
        if (data.error){
            yield put(Actions.loginError(data.error));
        } else {
            yield put(Actions.loginSuccess({...data, expires_in: Date.now() + 35000}));
        }
}

// @ts-ignore
function* callRegister({payload}) {
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

function* callRefreshToken() {
    if (!(yield select(getStatusRefreshingToken))) {
        yield put(Actions.tokenIsRefreshing());
        const {token} = yield select(getToken);
        const data = yield call(() => (fetches.refreshTokenFetch(token)
            .then(res => res.json())
            .catch(err => err)));
        (console as any).log({...data, expires_in: Date.now() + 35000});
        yield put(Actions.setNewToken({...data, expires_in: Date.now() + 35000}));
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

export function* watchCallRefreshToken() {
    yield takeEvery(ActionType.REFRESH_TOKEN, callRefreshToken)
}