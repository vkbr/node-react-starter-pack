import { delay } from 'redux-saga';
import { all, put, takeEvery } from 'redux-saga/effects';

import { ADD_TODO, ADD_TODO_START, ADD_TODO_DONE, ADD_TODO_FAIL, TODO_TOGGLE, TODO_TOGGLE_DONE } from '../actions-types';

export function* addTodoAsync({ title }) {
	try {
		yield delay(1000);
		yield put({ type: ADD_TODO_START });
		yield put({ type: ADD_TODO_DONE, todo: {
			title,
			id: Math.random().toString(36),
			isDone: false,
		}});
	} catch (e) {
		yield put({ type: ADD_TODO_FAIL });
	}
}

export function* toggleTodoDone({ id }) {
	yield delay(1000);
	yield put({ type: TODO_TOGGLE_DONE, id });
}

export function* watchAddTodo() {
	yield takeEvery(ADD_TODO, addTodoAsync);
}

export function* watchToggleTodo() {
	yield takeEvery(TODO_TOGGLE, toggleTodoDone);
}

export default function* () {
	yield all([
		watchAddTodo(),
		watchToggleTodo(),
	]);
};