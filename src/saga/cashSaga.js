import {put, takeEvery} from "redux-saga/effects"
import { addCashAction, ASYNC_ADD_CASH } from "../store/cashReducer"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker(cash) {
    yield delay(1000)
    yield put(addCashAction(cash))
}

function* decrementWorker() {

}

export function* cashWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
}