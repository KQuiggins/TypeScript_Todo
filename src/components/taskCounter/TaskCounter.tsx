import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitcorrectBorderColor';



const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { status = Status.completed, count = 0 } = props;
  return (
    <>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
        >
            <Avatar sx={{ 
                width: '96px', 
                height: '96px', 
                backgroundColor: 'transparent',
                marginBottom: '16px',
                border: '5px solid',
                borderColor: `${emitCorrectBorderColor(status)}`  }}>
            <Typography variant="h4" color='#ffffff'>
                10
            </Typography>
            </Avatar>
            <Typography
                color='#ffffff'
                variant="h5"
                fontSize='20px'
            >
                Subtitle
            </Typography>
        </Box>
    </>
  )
}

export default TaskCounter
