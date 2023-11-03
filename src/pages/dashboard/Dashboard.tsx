import { FC, ReactElement } from 'react';



import { Grid } from '@mui/material';
import TaskArea from '../../components/taskArea/TaskArea';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh">
        <TaskArea />
        <Sidebar />
        
    </Grid>
  )
}

export default Dashboard