import React from 'react';
import TodoList from '../components/TodoList';

const todos = [
	{id: 1, title: "Get milk", isDone: false },
	{id: 2, title: "Reply to email", isDone: true},
	{id: 3, title: "Look at calendar", isDone: false},
];

export default () => <TodoList todos={todos} />;
