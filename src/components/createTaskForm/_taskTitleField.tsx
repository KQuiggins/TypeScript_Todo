import PropTypes from 'prop-types';
import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
	const {
		onChange = (e) => {
			console.log(e);
		},
		disabled = false,
	} = props;

	return (
		<TextField
			name='title'
			id='outlined-basic'
			label='Task Title'
			variant='outlined'
			size='small'
			placeholder='Enter task title here...'
			fullWidth
			disabled={disabled}
			onChange={onChange}
		/>
	);
};

TaskTitleField.propTypes = {
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};

export default TaskTitleField;
