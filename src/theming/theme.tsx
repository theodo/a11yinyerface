import { blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1E45CF",
    },
    secondary: {
      main: blueGrey[700],
    },
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
  },
});

export default theme;
