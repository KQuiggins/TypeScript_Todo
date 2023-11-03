import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
	name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
	const { name = 'John' } = props;

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
		>
			<Avatar
				sx={{
					width: '96px',
					height: '96px',
					marginBottom: '16px',
					backgroundColor: 'primary.main',
				}}
			>
				<Typography variant='h4' component='div' sx={{ mt: 1 }}>
					{`${name.substring(0, 1)}`}
				</Typography>
			</Avatar>
			<Typography
				variant='h6'
				component='div'
				sx={{ mt: 1 }}
				color='text.primary'
			>
				{`Welcome, ${name}`}
			</Typography>
			<Typography
				variant='body1'
				component='div'
				sx={{ mt: 1 }}
				color='text.primary'
			>
				This is your personal task manager
			</Typography>
		</Box>
	);
};

Profile.propTypes = {
	name: PropTypes.string,
};

export default Profile;
