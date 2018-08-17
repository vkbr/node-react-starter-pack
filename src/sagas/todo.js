import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { ADD_TODO } from '../actions-types';

export function* addTodoAsync() {
	yield delay(1000);
	yield put({ type: ADD_TODO });
}

export function* watchAddTodo() {
	yield takeEvery(ADD_TODO, addTodoAsync);
}