import {
	Box,
	Button,
	Typography,
	AppBar as MuiAppBar,
	Toolbar,
	Link,
} from '@mui/material';

const AppBar: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<MuiAppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						color='white'
						sx={{ flexGrow: 1 }}
						component={Link}
						href='/'
					>
						a11y inyerface
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
