import {takeEvery} from "redux-saga";
import ActionType from '../actions/actions';
import fetches from '../../services/index';

function* callLogin({user}){
    yield result = fetches.loginFetch(user);
    // TODO
}