import React from 'react';
import { render } from 'react-dom';

import './normalize.css';

import Pages from './pages';
import { hot } from 'react-hot-loader';

let App;

if (process.env.NODE_ENV === 'development') {
	App = hot(module)(Pages);
} else {
	App = Pages;
}

render(<App />, document.getElementById('app'));
