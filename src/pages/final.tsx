import { Container } from "@mui/system";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AppLink from "src/components/ui/Buttons/AppLink";
import FailureComponent from "src/components/ui/FinalPage/FailureComponent";
import SuccessComponent from "src/components/ui/FinalPage/SucessComponent";
import PageTextTemplate from "src/components/ui/PageTextTemplate/PageTextTemplate";
import { cartAtom } from "src/store/cart";

import { StaticProps } from "./_app";

const FinalPage: NextPage = () => {
  const { t } = useTranslation([
    "common",
    "fruits",
    "flour",
    "dairy_coffee_egg",
  ]);
  const [cart] = useAtom(cartAtom);
  const expectedCart = [
    { title: "apple", category: "fruits" },
    { title: "egg", category: "dairy_coffee_egg" },
    { title: "wheat", category: "flour" },
  ];
  const missingCart = [];
  for (const expectedCartItem of expectedCart) {
    if (
      !Object.values(cart).find(
        (cartItem) =>
          cartItem.product.title === expectedCartItem.title + ".title"
      )
    ) {
      missingCart.push(expectedCartItem);
    }
  }

  const isCartValid = missingCart.length == 0;
  const content = (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        rowGap: "2em",
      }}
    >
      {isCartValid ? SuccessComponent() : FailureComponent({ missingCart })}
      <AppLink text={t("final-page.failure.try-again")} link="/" />
    </Container>
  );
  return <PageTextTemplate content={content} />;
};

export default FinalPage;

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
