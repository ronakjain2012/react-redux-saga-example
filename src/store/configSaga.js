import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import userReducer from "./stores/user";
import logger from "redux-logger";
import { watcherSaga } from './sagas/rootSaga'

const reducer = combineReducers({
   user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware,logger];

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;