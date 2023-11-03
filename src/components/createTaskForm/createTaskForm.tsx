import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';

//import PropTypes from 'prop-types';

const CreateTaskForm: FC = (): ReactElement => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='flex-start'
			width='100%'
			px={4}
			my={6}
		>
			<Typography variant='h4' component='div' sx={{ mt: 1 }}>
				Create Task
			</Typography>

			<Stack sx={{ width: '100%' }} spacing={2}>
				<TaskTitleField />
				<TaskDescriptionField />
			</Stack>
		</Box>
	);
};

export default CreateTaskForm;
