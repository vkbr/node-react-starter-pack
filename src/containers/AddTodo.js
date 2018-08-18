import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddTodo from '../components/AddTodo';
import { addTodo } from '../reducers/todo';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddTodo);
