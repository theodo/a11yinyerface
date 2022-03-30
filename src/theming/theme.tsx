import { createTheme } from '@mui/material/styles';
import { teal, blueGrey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: teal[600],
		},
		secondary: {
			main: blueGrey[700],
		},
	},
});

export default theme;
