import { useState } from 'react';
import { Box } from '@mui/system';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';
import Link from '../../Link/Link';
import {
    ProductCategory,
    productCategoryLabelMapping,
} from 'src/types/product';

export interface IMenuProps { }

const menuItems = [
    {
        text: ProductCategory.FRUITS,
        link: 'fruits',
        icon: <AgricultureTwoToneIcon />,
    }
];


const Menu: React.FC = (props: IMenuProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
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
