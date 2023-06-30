import { CircularProgress, Container, Grid } from "@mui/material";
import { shuffle } from "lodash-es";

import AppBar from "components/ui/AppBar/AppBar";
import ProductCardImage from "src/components/ui/Cards/ProductCardImage/ProductCardImage";
import { Product } from "src/types/product";

import ProductCard from "../Cards/ProductCard/ProductCard";

export interface IPageGridTemplate {
  data: Product[] | undefined;
  error: Error;
  productCardType?: ProductCardTypeEnum;
}

interface IGetProductCardElement {
  productCardType?: ProductCardTypeEnum;
  product: Product;
}

export enum ProductCardTypeEnum {
  Image,
  Text,
  TinyButton,
}

const getProductCardElement = ({
  productCardType,
  product,
}: IGetProductCardElement) => {
  switch (productCardType) {
    case ProductCardTypeEnum.Image:
      return <ProductCardImage product={product} />;
    case ProductCardTypeEnum.Text:
      return <ProductCard product={product} />;
    case ProductCardTypeEnum.TinyButton:
      return <ProductCard product={product} tiny={true} />;
    default:
      return <ProductCardImage product={product} />;
  }
};

const PageGridTemplate: React.FC<IPageGridTemplate> = ({
  data,
  error,
  productCardType,
}) => {
  if (data === undefined || error) {
    return <CircularProgress />;
  }

  return (
    <>
      <AppBar />
      <Container>
        <Grid container spacing={4} marginY={2}>
          {shuffle(data).map((product) => (
            <Grid key={product.id} item xs={3}>
              {getProductCardElement({ productCardType, product })}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PageGridTemplate;
