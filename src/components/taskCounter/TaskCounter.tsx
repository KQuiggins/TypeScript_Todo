import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';



const TaskCounter: FC = (): ReactElement => {
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
                borderColor: 'warning.light'  }}>
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
