import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

const TaskTitleField: FC = (): ReactElement => {
	return (
    
    <TextField 
        name='title'
        id="outlined-basic" 
        label="Task Title" 
        variant="outlined" 
        size='small'
        placeholder='Enter task title here...'
        fullWidth
        
    />
    
)
};

export default TaskTitleField;
