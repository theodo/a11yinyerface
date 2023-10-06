import { CircularProgress, Container, Grid } from "@mui/material";
import { shuffle } from "lodash-es";

import AppBar from "components/ui/AppBar/AppBar";
import ProductCardImage from "src/components/ui/Cards/ProductCardImage/ProductCardImage";
import { Product } from "src/types/product";

import HelpCard from "../Cards/HelpCard/HelpCard";
import ProductCard from "../Cards/ProductCard/ProductCard";

export interface IPageGridTemplate {
  data: Product[] | undefined;
  error: Error;
  productCardType?: ProductCardTypeEnum;
  translationFile?: string;
  disability: string;
}

interface IGetProductCardElement {
  productCardType?: ProductCardTypeEnum;
  product: Product;
  translationFile?: string;
}

export enum ProductCardTypeEnum {
  Image,
  Text,
  TinyButton,
}

const getProductCardElement = ({
  productCardType,
  product,
  translationFile,
}: IGetProductCardElement) => {
  switch (productCardType) {
    case ProductCardTypeEnum.Image:
      return (
        <ProductCardImage product={product} translationFile={translationFile} />
      );
    case ProductCardTypeEnum.Text:
      return (
        <ProductCard product={product} translationFile={translationFile} />
      );
    case ProductCardTypeEnum.TinyButton:
      return (
        <ProductCard
          product={product}
          tiny={true}
          translationFile={translationFile}
        />
      );
    default:
      return (
        <ProductCardImage product={product} translationFile={translationFile} />
      );
  }
};

const PageGridTemplate: React.FC<IPageGridTemplate> = ({
  data,
  error,
  productCardType,
  translationFile,
  disability,
}) => {
  if (data === undefined || error) {
    return <CircularProgress />;
  }

  return (
    <>
      <AppBar />
      <HelpCard displayShoppingList={true} disability={disability} />
      <Container>
        <Grid container spacing={4} marginY={2}>
          {shuffle(data).map((product) => (
            <Grid key={product.id} item xs={3}>
              {getProductCardElement({
                productCardType,
                product,
                translationFile,
              })}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PageGridTemplate;
