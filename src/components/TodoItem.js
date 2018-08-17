import React from 'react';
import styled, { css } from 'react-emotion';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = styled.li`
	padding: 10px 20px;
	font-size: 1.2em;
`;

const TodoItem = ({ title, isDone }) => (
	<Todo>
		<Checkbox></Checkbox>
		<span>{title}</span>
	</Todo>
);

export default TodoItem;