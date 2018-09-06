import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState: object) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );
}
