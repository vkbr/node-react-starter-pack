import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './createStore';

render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('app'));
