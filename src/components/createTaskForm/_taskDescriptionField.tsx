import PropTypes from 'prop-types';
import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
	const {
		onChange = (e) => {
			console.log(e);
		},
		disabled = false,
	} = props;
	
	return (
		<TextField
			name='description'
			id='outlined-basic'
			label='Task Description'
			variant='outlined'
			placeholder='Enter task description here...'
            size='small'
			fullWidth
			multiline
            rows={4}
			disabled={disabled}
			onChange={onChange}
			
		/>
	);
};

TaskDescriptionField.propTypes = {
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};

export default TaskDescriptionField;
