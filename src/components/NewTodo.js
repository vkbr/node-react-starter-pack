import React from 'react';
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

const NewTodo = () => (
	<Container>
		<Input
			style={style}
			placeholder="Todo..."
			endAdornment={
				<InputAdornment>
					<IconButton>
						<ChevronRightIcon style={{ color: '#aaa' }} />
					</IconButton>
				</InputAdornment>
			}
		/>
	</Container>
);

export default NewTodo;
