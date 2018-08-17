import React from 'react';
import styled from 'react-emotion';

import TodoItem from './TodoItem';

const List = styled.ul`
	list-style: none;
	padding: 20px 0;
	margin: 0;
`;

const TodoList = ({ todos }) => (
<List className="todo-list">
	{todos.map((item) => <TodoItem key={item.id} {...item} />)}
</List>
);

export default TodoList;
