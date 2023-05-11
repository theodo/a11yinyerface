import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useAtom } from "jotai";

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

  const addToCart = () => {
    const cartItem = cart[product.id] ?? { product, quantity: 0 };
    cartItem.quantity += 1;
    setCart((cart) => {
      return { ...cart, [product.id]: cartItem };
    });
  };

  return (
    <IconButton
      aria-label="Add cart"
      color="inherit"
      style={tiny ? { padding: 0 } : {}}
      onClick={addToCart}
    >
      <AddShoppingCartIcon style={tiny ? { fontSize: "12px" } : {}} />
    </IconButton>
  );
};

export default AddToCartButton;
