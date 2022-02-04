import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer';
import createSagaMiddleware from "redux-saga";
import { customerReducer } from "./customerReducer";
import { cashWatcher } from '../saga/cashSaga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(cashWatcher)