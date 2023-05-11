import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";

import { Product } from "src/types/product";

import AddToCartButton from "../AddToCartButton/AddToCartButton";

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
        layout="responsive"
      />
      <Box paddingX={3} paddingY={1}>
        <Typography>{product.title}</Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">{product.price}</Typography>
          <AddToCartButton product={product} tiny />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCardTinyButton;
