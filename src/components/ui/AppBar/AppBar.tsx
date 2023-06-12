import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

import Menu from "./Menu/Menu";

const AppBar: React.FC = () => {
  return (
    <MuiAppBar
      position="static"
      style={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Menu />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
