import { Button } from "@mui/material";
import { useAtom } from "jotai";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { cartAtom } from "src/store/cart";
import { Product } from "src/types/product";

export interface IAddToCartButton {
  product: Product;
  tiny?: boolean;
}

const AddToCartButton: React.FC<IAddToCartButton> = ({
  product,
  tiny = false,
}) => {
  const [cart, setCart] = useAtom(cartAtom);

  const { t } = useTranslation();

  const addToCart = () => {
    const cartItem = cart[product.id] ?? { product, quantity: 0 };
    cartItem.quantity += 1;
    setCart((cart) => {
      return { ...cart, [product.id]: cartItem };
    });
  };

  const styleButton: React.CSSProperties = {
    borderRadius: 50,
    backgroundColor: "white",
    textTransform: "none",
    color: "black",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    border: "grey 1px solid",
  };

  let addImageSize = 22;

  if (tiny) {
    styleButton.fontSize = "5px";
    styleButton.minWidth = "0";
    styleButton.padding = "3px";
    styleButton.gap = "3px";
    addImageSize = 6;
  }

  return (
    <Button aria-label="Add cart" style={styleButton} onClick={addToCart}>
      {t("cards.add-button")}
      <Image
        src={require("public/icons/add.png")}
        width={addImageSize}
        height={addImageSize}
        alt=""
      />
    </Button>
  );
};

export default AddToCartButton;
