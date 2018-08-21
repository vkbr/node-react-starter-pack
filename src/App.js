import React from 'react';
import { hot } from 'react-hot-loader';

import packageJson from '../package.json';
import './normalize.css';

const App = () => (
	<div>
		<h1>
			{
				packageJson.name
					.replace(/-/g, ' ')
					.replace(/^[a-z]| [a-z]/g, a => a.toUpperCase())}
		</h1>
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
