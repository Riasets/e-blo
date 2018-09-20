import {takeEvery} from "redux-saga";
import {call, put} from "redux-saga/effects";
import fetches from '../../services/index';
import ActionType, {Actions} from '../actions/actions';
import {select} from "../../../node_modules/redux-saga/effects";
import {getToken} from "../reducers/auth";

// @ts-ignore
function* callLogin({payload}){
        yield put(Actions.loginLoad());
        const data = yield call(() => (fetches.loginFetch(payload)
            .then( res => res.json())
            .then(res => res.expires_in = Date.now() + 350000)
            .catch(err => err)));
        if (data.error){
            yield put(Actions.loginError(data.error));
        } else {
            yield put(Actions.loginSuccess(data));
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
// TODO
// Почитать про take и ожидание конца рефреша токена
function* callRefreshToken() {
    yield put(Actions.tokenIsRefreshing)
    const {token} = yield select(getToken);
    const data = call(() => (fetches.refreshTokenFetch(token))
        .then(res => res.json())
        .catch(err => err.json()))
    yield
}

export function* watchCallLogin() {
    // @ts-ignore
    yield takeEvery(ActionType.LOGIN, callLogin)
}

export function* watchCallRegister() {
    // @ts-ignore
    yield takeEvery(ActionType.REGISTER, callRegister)
}