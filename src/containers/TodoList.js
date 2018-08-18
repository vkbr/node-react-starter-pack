import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/TodoList';
import { toggleTodo } from '../reducers/todo';

const mapStateToProps = (state) => ({
	todos: state.todo.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	toggleTodo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
