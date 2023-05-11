import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";

import { Product } from "src/types/product";

import AddToCartButton from "../AddToCartButton/AddToCartButton";

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
        <AddToCartButton product={product} />
      </Box>
    </Paper>
  );
};

export default ProductCardImage;
