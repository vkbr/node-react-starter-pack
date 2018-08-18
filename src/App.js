import React from 'react';
import styled, { css } from 'react-emotion';
import { hot } from 'react-hot-loader'

import Title from './components/Title';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

const style = css`
	padding: 0;
	margin: 0;
	height: 100%;
	font-family: Whitney,DIN,Helvetica,Arial,sans-serif;
	font-size: 14px;
	background: #f7f9ff;
`;

document.body.classList.add(style);

const Container = styled.div`
	min-height: 100%;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	background: white;
	box-shadow: 0 0 4px 0 rgba(0,0,0,.4);
	padding: 20px 0;
`;

const App = () => (
	<Container>
		<Title>Saga todo</Title>
		<TodoList />
		<AddTodo />
	</Container>
);

export default hot(module)(App);
