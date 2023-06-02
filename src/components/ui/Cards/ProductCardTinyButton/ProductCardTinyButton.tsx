import { Box, Paper, Typography } from "@mui/material";

import { Product } from "src/types/product";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { getImageStyle, stylePrice } from "../ProductCard/ProductCardStyle";

export interface IProductCardTinyButton {
  product: Product;
}

const ProductCardTinyButton: React.FC<IProductCardTinyButton> = ({
  product,
}) => {
  return (
    <Paper>
      <Box style={getImageStyle(product, true)}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "5px",
          }}
        >
          <Typography style={stylePrice}>{product.price}</Typography>
          <AddToCartButton product={product} tiny />
        </Box>
      </Box>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {product.title}
      </Typography>
    </Paper>
  );
};

export default ProductCardTinyButton;
