import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAtom } from "jotai";
import { shuffle } from "lodash-es";
import type { NextPage } from "next";

import AppBar from "components/ui/AppBar/AppBar";
import AppLink from "src/components/ui/Buttons/AppLink";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { cartAtom } from "src/store/cart";
import { Product } from "src/types/product";

const CartPage: NextPage = () => {
  useSimulator([SIMULATE_EFFECT.SCRAMBLE_LETTER]);

  const [cart, setCart] = useAtom(cartAtom);

  const removeFromCart = (product: Product) => () => {
    const cartItem = cart[product.id];
    cartItem.quantity -= 1;
    if (cartItem.quantity == 0) {
      delete cart[product.id];
      setCart({ ...cart });
    } else {
      setCart((cart) => {
        return { ...cart, [product.id]: cartItem };
      });
    }
  };

  return (
    <>
      <AppBar />
      <Container
        className="table-container"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "fontFamily",
            padding: "5px",
          }}
        >
          Mon panier
        </h1>

        <Table
          sx={{
            width: "600px",
            marginBottom: "30px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Produit</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>Quantité</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {shuffle(cart).map((item) => (
              <TableRow key={item.product.title}>
                <TableCell>{item.product.title}</TableCell>
                <TableCell>{item.product.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Button onClick={removeFromCart(item.product)}>
                    Retirer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AppLink text="Valider le panier" link="/final" />
      </Container>
    </>
  );
};

export default CartPage;
