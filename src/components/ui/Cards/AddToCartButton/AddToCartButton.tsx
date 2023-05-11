import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

import { Product } from "src/types/product";

export interface IAddToCartButton {
  product: Product;
  tiny?: boolean;
}

const AddToCartButton: React.FC<IAddToCartButton> = ({
  product,
  tiny = false,
}) => {
  return (
    <IconButton
      aria-label="Add cart"
      color="inherit"
      style={tiny ? { padding: 0 } : {}}
      onClick={() => alert("Congrats")}
    >
      <AddShoppingCartIcon style={tiny ? { fontSize: "12px" } : {}} />
    </IconButton>
  );
};

export default AddToCartButton;
