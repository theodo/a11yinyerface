import { Box, Typography, Paper, IconButton } from '@mui/material';
import Image from 'next/image';
import { Product } from 'src/types/product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export interface IProductCardTinyButton {
	product: Product;
}

const ProductCardTinyButton: React.FC<IProductCardTinyButton> = ({
	product,
}) => {
	return (
		<Paper>
			<Image
				alt={product.title}
				src={product.previewImageUrl}
				width={218}
				height={218}
				layout='responsive'
			/>
			<Box paddingX={3} paddingY={1}>
				<Typography>{product.title}</Typography>

				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Typography variant='caption'>{product.price}</Typography>

					<IconButton
						aria-label='Add cart'
						color='inherit'
						style={{ padding: 0 }}
						onClick={() => alert('Congrats')}
					>
						<AddShoppingCartIcon style={{ fontSize: '12px' }} />
					</IconButton>
				</Box>
			</Box>
		</Paper>
	);
};

export default ProductCardTinyButton;
