import { Product } from "src/types/product";

export const stylePrice: React.CSSProperties = {
  borderRadius: 50,
  backgroundColor: "white",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  padding: "5px",
  border: "grey 1px solid",
};

const imageSize = 218;

export const getImageStyle = (product: Product, tiny: boolean) => {
  const style: React.CSSProperties = {
    height: imageSize,
    width: tiny ? "" : "100%",
    backgroundImage: `url(${product.previewImageUrl})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };
  return style;
};
