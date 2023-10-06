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
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AppBar from "components/ui/AppBar/AppBar";
import AppLink from "src/components/ui/Buttons/AppLink";
import HelpCardsGroup from "src/components/ui/Cards/HelpCard/HelpCard";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { cartAtom } from "src/store/cart";
import { Product } from "src/types/product";

import { StaticProps } from "./_app";

const CartPage: NextPage = () => {
  useSimulator([SIMULATE_EFFECT.SCRAMBLE_LETTER]);

  const { t } = useTranslation([
    "common",
    "flour",
    "fruits",
    "dairy_coffee_egg",
  ]);

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
      <HelpCardsGroup disability="dyslexia" />
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
          {t("cart.title")}
        </h1>

        <Table
          sx={{
            width: "600px",
            marginBottom: "30px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>{t("cart.product")}</TableCell>
              <TableCell>{t("cart.price")}</TableCell>
              <TableCell>{t("cart.quantity")}</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {shuffle(cart).map((item) => (
              <TableRow key={item.product.title}>
                <TableCell>
                  {t(
                    item.product.category.toLowerCase() +
                      ":" +
                      item.product.title
                  )}
                </TableCell>
                <TableCell>
                  {t(
                    item.product.category.toLowerCase() +
                      ":" +
                      item.product.price
                  )}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Button onClick={removeFromCart(item.product)}>
                    {t("cart.remove")}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AppLink text={t("cart.validate")} link="/final" />
      </Container>
    </>
  );
};

export default CartPage;

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "fruits",
        "flour",
        "dairy_coffee_egg",
      ])),
    },
  };
}
