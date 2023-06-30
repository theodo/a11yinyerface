import { Typography, Paper, Box } from "@mui/material";

import { Product } from "src/types/product";

import { getImageStyle, stylePrice } from "./ProductCardStyle";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export interface IProductCard {
  product: Product;
  tiny?: boolean;
}

const ProductCard: React.FC<IProductCard> = ({ product, tiny = false }) => {
  return (
    <Paper>
      <Box style={getImageStyle(product, tiny)}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "5px",
          }}
        >
          <Typography style={stylePrice}>{product.price}</Typography>
          <AddToCartButton product={product} tiny={tiny} />
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

export default ProductCard;
