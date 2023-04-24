import AgricultureTwoToneIcon from "@mui/icons-material/AgricultureTwoTone";
import GrassTwoToneIcon from "@mui/icons-material/GrassTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import {
  ProductCategory,
  productCategoryLabelMapping,
} from "src/types/product";

const menuItems = [
  {
    text: ProductCategory.FRUITS,
    link: "fruits",
    icon: <AgricultureTwoToneIcon />,
  },
  {
    text: ProductCategory.FLOURS,
    link: "flour",
    icon: <GrassTwoToneIcon />,
  },
];

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width={250}>
          <List>
            {menuItems.map(({ text, link, icon }) => (
              <ListItem
                key={text}
                disablePadding
                component={Link}
                href={link}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={productCategoryLabelMapping[text]} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
