import React, { PureComponent } from 'react';
import styled from 'react-emotion';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Container = styled.div`
	padding: 0 20px;
`;

const style={
	width: '100%',
};

class NewTodo extends PureComponent {
	state = {
		title: '',
	};
	render() {
		const { addTodo } = this.props;
		const { title } = this.state;

		return (
			<Container>
				<Input
					style={style}
					placeholder="Todo..."
					value={title}
					endAdornment={
						<InputAdornment position="end">
							<IconButton>
								<ChevronRightIcon style={{ color: '#aaa' }} />
							</IconButton>
						</InputAdornment>
					}
					onChange={e => this.setState({ title: e.target.value })}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							addTodo(title);
							this.setState({ title: '' });
						}
					}}
				/>
			</Container>
		);
	}
}

export default NewTodo;
