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
import EggTwoToneIcon from '@mui/icons-material/EggTwoTone';
import GrassTwoToneIcon from '@mui/icons-material/GrassTwoTone';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';
import BreakfastDiningTwoToneIcon from '@mui/icons-material/BreakfastDiningTwoTone';
import Link from '../../Link/Link';
import {
	ProductCategory,
	productCategoryLabelMapping,
} from 'src/types/product';

export interface IMenuProps {}

const menuItems = [
	{
		text: ProductCategory.FLOUR_EGGS,
		link: 'flour-eggs',
		icon: <EggTwoToneIcon />,
	},
	{
		text: ProductCategory.DAIRY_COFFEE,
		link: 'dairy-coffee',
		icon: <LocalCafeTwoToneIcon />,
	},
	{
		text: ProductCategory.FRUITS,
		link: 'fruits',
		icon: <AgricultureTwoToneIcon />,
	},
	{
		text: ProductCategory.SUGAR_SPICES,
		link: 'sugar-spices',
		icon: <GrassTwoToneIcon />,
	},
	{
		text: ProductCategory.BREAD_JAM,
		link: 'bread-jam',
		icon: <BreakfastDiningTwoToneIcon />,
	},
];

const recipe = [
	['1 œuf', '50 g de farine'],
	['25 cl de lait'],
	['3 pommes'],
	['40 g de sucre en poudre', '1 pincée de cannelle en poudre'],
	['1 c. à soupe de miel'],
];

// https://www.marmiton.org/recettes/recette_clafoutis-aux-pommes_48769.aspx

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
