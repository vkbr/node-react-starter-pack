import React from 'react';
import styled, { css } from 'react-emotion';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Todo = styled.li`
	padding: 10px 20px;
	font-size: 1.2em;
`;

const TodoItem = ({ id, title, isDone, toggleTodo }) => (
	<Todo>
		<FormControlLabel
			control={
				<Checkbox 
					checked={isDone}
					onClick={() => toggleTodo(id)}
				/>
			}
			label={title}
		/>
	</Todo>
);

export default TodoItem;