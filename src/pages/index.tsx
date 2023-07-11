import { Stack, Container, Typography, Box } from "@mui/material";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

import AppLink from "src/components/ui/Buttons/AppLink";
import ObjectiveCard from "src/components/ui/Cards/ObjectiveCard/ObjectiveCard";
import PageTextTemplate from "src/components/ui/PageTextTemplate/PageTextTemplate";
import { cartAtom } from "src/store/cart";

const Home: NextPage = () => {
  const [, setCart] = useAtom(cartAtom);

  useEffect(() => {
    setCart({});
  }, [setCart]);

  const emphasisStyle = { color: "primary.main", fontWeight: "bold" };

  const presentationText = (
    <Typography>
      A11Y INYERFACE est un projet visant à{" "}
      <Box component="span" sx={emphasisStyle}>
        sensibiliser les utilisateurs aux principes de l&apos;accessibilité{" "}
      </Box>
      et à les encourager à{" "}
      <Box component="span" sx={emphasisStyle}>
        adopter des pratiques{" "}
      </Box>{" "}
      qui rendent le web{" "}
      <Box component="span" sx={emphasisStyle}>
        plus inclusif
      </Box>{" "}
      pour tous.
    </Typography>
  );

  const content = (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "3em",
        width: "120%",
        marginLeft: "-10%",
        marginBottom: "-5em",
      }}
    >
      {presentationText}
      <Stack py="2em" spacing="5em" textAlign="center" justifyContent="center">
        <Stack direction="row" justifyContent="space-around" spacing="5em">
          <Image src={require("/public/images/apple-pie.jpeg")} alt="" />
          <ObjectiveCard />
        </Stack>
        <AppLink text="Commencer l'expérience" link="/fruits" />
      </Stack>
    </Container>
  );

  return <PageTextTemplate content={content} />;
};

export default Home;
