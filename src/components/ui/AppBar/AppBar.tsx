import { Box, Typography, AppBar as MuiAppBar, Toolbar } from "@mui/material";

const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="white"
          sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}
        >
          A11yInYerFace
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
