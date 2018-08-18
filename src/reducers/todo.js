import { ADD_TODO, ADD_TODO_DONE, TODO_TOGGLE, TODO_TOGGLE_DONE } from '../actions-types';

const initialState = {
	list: [],
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO_DONE:
			return {
				...state,
				list: state.list.concat(action.todo),
			};
		case TODO_TOGGLE_DONE:
			console.log('js');
			return {
				...state,
				list: state.list
					.map(item => item.id === action.id ? { ...item, isDone: !item.isDone } : item),
			};
		default:
			return state;
	}
}

export const addTodo = (title) => ({
	type: ADD_TODO,
	title,
});

export const toggleTodo = (id) => ({
	type: TODO_TOGGLE,
	id,
});
