import { Stack, Container } from "@mui/material";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

import AppBar from "components/ui/AppBar/AppBar";
import AppLink from "src/components/ui/Buttons/AppLink";
import ObjectiveCard from "src/components/ui/Cards/ObjectiveCard/ObjectiveCard";
import { cartAtom } from "src/store/cart";

const Home: NextPage = () => {
  const [, setCart] = useAtom(cartAtom);

  useEffect(() => {
    setCart({});
  }, [setCart]);

  return (
    <>
      <AppBar />
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          py="2em"
          spacing="5em"
          textAlign="center"
          justifyContent="center"
          marginTop="5em"
        >
          <Stack direction="row" justifyContent="space-around" spacing="5em">
            <Image src={require("../../public/images/apple-pie.jpeg")} alt="" />

            <ObjectiveCard></ObjectiveCard>
          </Stack>
          <AppLink text="Commencer l'expérience" link="/fruits" />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
