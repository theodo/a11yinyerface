import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

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
  const [isCartValidated, setIsCartValidated] = useState<boolean>(false);
  const [missingCart, setMissingCart] = useState<
    { title: string; category: string }[]
  >([]);

  useEffect(() => {
    const expectedCart = [
      { title: "apple", category: "fruits" },
      { title: "egg", category: "dairy_coffee_egg" },
      { title: "wheat", category: "flour" },
    ];

    const missingCartValidation = [];

    for (const expectedCartItem of expectedCart) {
      if (
        !Object.values(cart).find(
          (cartItem) =>
            cartItem.product.title === expectedCartItem.title + ".title"
        )
      ) {
        missingCartValidation.push(expectedCartItem);
      }
    }
    setMissingCart(missingCartValidation);

    setIsCartValidated(true);
  }, [cart]);

  const isCartValid = missingCart.length == 0;

  const getContainerContent = () => {
    if (!isCartValidated) {
      return (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Container>
      );
    }
    return (
      <>
        {isCartValid ? (
          <SuccessComponent />
        ) : (
          <FailureComponent missingCart={missingCart} />
        )}
        <AppLink text={t("final-page.failure.try-again")} link="/" />
      </>
    );
  };

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
      {getContainerContent()}
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
