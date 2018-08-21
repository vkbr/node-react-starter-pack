import React from 'react';
import { hot } from 'react-hot-loader';

import './normalize.css';

const App = () => (
	<div>
		<h1>Node/React starter kit</h1>
		<p>
			<span>Entry point: </span>
			<code>./src/index.js</code>
		</p>
		<p>
			<span>Root React component:</span>
			{' '}
			<code>./src/App.js</code>
		</p>
	</div>
);

export default hot(module)(App);
