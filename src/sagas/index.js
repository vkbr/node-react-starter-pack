import { all } from 'redux-saga/effects';

import todoSaga from './todo';

export default function* () {
	yield all([
		todoSaga(),
	]);
};
