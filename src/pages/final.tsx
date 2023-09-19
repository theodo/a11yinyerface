import { Container } from "@mui/system";
import { useAtom } from "jotai";
import type { NextPage } from "next";

import AppLink from "src/components/ui/Buttons/AppLink";
import FailureComponent from "src/components/ui/FinalPage/FailureComponent";
import SuccessComponent from "src/components/ui/FinalPage/SucessComponent";
import PageTextTemplate from "src/components/ui/PageTextTemplate/PageTextTemplate";
import { cartAtom } from "src/store/cart";

const FinalPage: NextPage = () => {
  const [cart] = useAtom(cartAtom);
  const expectedCartTitles = ["Pomme", "Oeuf", "Farine de blé"];
  const missingCartTitles = [];
  for (const expectedCartTitle of expectedCartTitles) {
    if (
      !Object.values(cart).find(
        (cartItem) => cartItem.product.title === expectedCartTitle
      )
    ) {
      missingCartTitles.push(expectedCartTitle);
    }
  }

  const isCartValid = missingCartTitles.length == 0;
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
      {isCartValid ? SuccessComponent : FailureComponent({ missingCartTitles })}
      <AppLink text="Retenter l'expérience ?" link="/" />
    </Container>
  );
  return <PageTextTemplate content={content} />;
};

export default FinalPage;
