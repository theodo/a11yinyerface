import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import Image from "next/image";

import AppLink from "src/components/ui/Buttons/AppLink";
import PageTextTemplate from "src/components/ui/PageTextTemplate/PageTextTemplate";

const FinalPage: NextPage = () => {
  const content = (
    <Container
      sx={{
        textAlign: "center",
        marginTop: "15vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image
        src={require("public/product_assets/images/congrats.svg")}
        alt=""
      />
      <Typography
        fontSize={60}
        sx={{
          color: "primary.main",
          marginTop: "50px",
        }}
      >
        Félicitations,
      </Typography>
      <Typography
        style={{
          fontFamily: "fontFamily",
          fontSize: "30px",
          color: "primary.main",
          marginBottom: "5vh",
        }}
      >
        tu as réussi à commander les ingrédients pour réaliser ta tarte aux
        pommes
      </Typography>
      <AppLink text="Retenter l'expérience ?" link="/" />
    </Container>
  );
  return <PageTextTemplate content={content} />;
};

export default FinalPage;
