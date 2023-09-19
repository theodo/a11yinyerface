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
      A11Y INYERFACE est un projet visant à vous faire{" "}
      <Box component="span" sx={emphasisStyle}>
        vivre l&apos;expérience de personas handicapés{" "}
      </Box>
      grâce à des simulations interactives. En vous mettant dans leur peau, vous
      découvrirez{" "}
      <Box component="span" sx={emphasisStyle}>
        les défis auxquels ils sont confrontés au quotidien.{" "}
      </Box>{" "}
      Notre objectif est de{" "}
      <Box component="span" sx={emphasisStyle}>
        sensibiliser à l&apos;importance de l&apos;accessibilité pour un web
        plus inclusif.
      </Box>{" "}
    </Typography>
  );

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
      <Container sx={{ width: "800px" }}>{presentationText}</Container>
      <Stack spacing="2em" textAlign="center" justifyContent="center">
        <Stack direction="row" justifyContent="center" spacing="5em">
          <Image
            src={require("/public/images/apple-pie.jpeg")}
            alt=""
            width={330}
            height={300}
            objectFit="cover"
            style={{ borderRadius: "8px" }}
          />
          <ObjectiveCard />
        </Stack>
        <AppLink text="Commencer l'expérience" link="/fruits" />
      </Stack>
    </Container>
  );

  return <PageTextTemplate content={content} />;
};

export default Home;
