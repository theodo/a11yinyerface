import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import Image from "next/image";

import { Product } from "src/types/product";

export interface IProductCardImage {
  product: Product;
}

const ProductCardImage: React.FC<IProductCardImage> = ({ product }) => {
  return (
    <Paper>
      <Image
        alt={product.title}
        src={product.previewImageUrl}
        width={218}
        height={218}
        layout="responsive"
      />
      <Box
        paddingX={3}
        paddingY={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>{product.price}</Typography>
        <IconButton aria-label="Add cart" color="inherit">
          <AddShoppingCartIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ProductCardImage;
