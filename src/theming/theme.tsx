import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1E45CF",
    },
    secondary: {
      main: "#D2DAF5",
    },
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
  },
});

export default theme;
