import { applyMiddleware, compose, createStore } from 'redux';
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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
