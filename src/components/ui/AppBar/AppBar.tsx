import {
	Box,
	Button,
	Typography,
	AppBar as MuiAppBar,
	Toolbar,
} from '@mui/material';
import Menu from './Menu/Menu';
import Link from '../Link/Link';

const AppBar: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<MuiAppBar position='static'>
				<Toolbar>
					<Menu />

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
