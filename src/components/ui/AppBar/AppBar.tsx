import { Typography, AppBar as MuiAppBar, Toolbar } from "@mui/material";

import Menu from "./Menu/Menu";

const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Menu />
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
