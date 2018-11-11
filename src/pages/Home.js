import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
		<h1>Node/React starter kit</h1>
		<p>
			<span>Entry point: </span>
			<code>./src/index.js</code>
		</p>
		<p>
			<span>Root React component:</span>
			{' '}
			<code>./src/Home.js</code>
		</p>
		<div>
			<Link to="/about">About</Link>
		</div>
	</div>
);

export default Home;
