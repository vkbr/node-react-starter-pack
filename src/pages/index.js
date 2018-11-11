import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home';
import About from './About';

const Pages = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Fragment>
	</Router>
);

export default Pages;
