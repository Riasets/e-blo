import {takeEvery} from "redux-saga";
import ActionType from '../actions/actions';
import fetches from '../../services/index';

function* callLogin(user: Headers){
        fetches.loginFetch(user)
            .then((res) => {
                return res.json();
            })
            .then(

            )

};