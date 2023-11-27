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
            <Avatar sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}>
            <Typography variant="h6" component="div" gutterBottom>
                10
            </Typography>
            </Avatar>
            <Typography>Subtitle</Typography>
        </Box>
    </>
  )
}

export default TaskCounter
