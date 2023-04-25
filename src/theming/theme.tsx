import { teal, blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

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
