import React from 'react';
import { hot } from 'react-hot-loader'

import './normalize.css';

const App = () => (
	<div>
		<h1>
			{
				require('../package.json').name
					.replace(/-/g, ' ')
					.replace(/^[a-z]| [a-z]/g, a => a.toUpperCase())}
		</h1>
		<p>Entry point: <code>./src/index.js</code></p>
		<p>Root React component: <code>./src/App.js</code></p>
	</div>
);

export default hot(module)(App)
