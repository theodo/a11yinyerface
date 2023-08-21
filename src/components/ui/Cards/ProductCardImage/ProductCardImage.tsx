import { Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

import { Product } from "src/types/product";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { getImageStyle, stylePrice } from "../ProductCard/ProductCardStyle";

export interface IProductCardImage {
  product: Product;
  translationFile?: string;
}

const ProductCardImage: React.FC<IProductCardImage> = ({
  product,
  translationFile = "common",
}) => {
  const { t } = useTranslation(translationFile);
  return (
    <Paper style={getImageStyle(product, false)}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "5px",
        }}
      >
        <Typography style={stylePrice}>{t(product.price)}</Typography>
        <AddToCartButton product={product} />
      </Box>
    </Paper>
  );
};

export default ProductCardImage;
