import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

const TaskDescriptionField: FC = (): ReactElement => {
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
			
		/>
	);
};

export default TaskDescriptionField;
