import { Typography, Paper, Stack, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { Product } from 'src/types/product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export interface IProductCard {
	product: Product;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
	return (
		<Paper>
			<Image
				alt={product.title}
				src={product.previewImageUrl}
				width={218}
				height={218}
				layout='responsive'
			/>
			<Box paddingX={2} paddingY={1}>
				<Typography>{product.title}</Typography>

				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Typography variant='caption'>{product.price}</Typography>

					<IconButton aria-label='Add cart' color='inherit'>
						<AddShoppingCartIcon />
					</IconButton>
				</Box>
			</Box>
		</Paper>
	);
};

export default ProductCard;
