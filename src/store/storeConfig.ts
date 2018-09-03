import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState: object) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}