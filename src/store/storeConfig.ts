import { applyMiddleware, createStore } from 'redux';
import {  persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from "./saga/sagas";

const persistConfig = {
  storage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
        persistedReducer,
        (window as any)
        .__REDUX_DEVTOOLS_EXTENSION__ && (window as any)
        .__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware),
    );
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
