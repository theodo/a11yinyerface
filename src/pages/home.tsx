import {
  Stack,
  Container,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

import AppLink from "src/components/ui/Buttons/AppLink";
import ObjectiveCard from "src/components/ui/Cards/ObjectiveCard/ObjectiveCard";
import PageTextTemplate from "src/components/ui/PageTextTemplate/PageTextTemplate";
import { cartAtom } from "src/store/cart";
import theme from "src/theming/theme";

import { StaticProps } from "./_app";

const Home: NextPage = () => {
  const [, setCart] = useAtom(cartAtom);
  const { t } = useTranslation();

  useEffect(() => {
    setCart({});
  }, [setCart]);

  const emphasisStyle = { color: "primary.main", fontWeight: "bold" };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const presentationText = (
    <Typography>
      {t("project-name")} {t("intro-page.sentence.intro")}{" "}
      <Box component="span" sx={emphasisStyle}>
        {t("intro-page.sentence.experience")}{" "}
      </Box>
      {t("intro-page.sentence.in-shoe")}{" "}
      <Box component="span" sx={emphasisStyle}>
        {t("intro-page.sentence.daily-challenge")}{" "}
      </Box>{" "}
      {t("intro-page.sentence.goal")}{" "}
      <Box component="span" sx={emphasisStyle}>
        {t("intro-page.sentence.sensibilize")}{" "}
      </Box>
    </Typography>
  );

  const content = (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        rowGap: "1em",
      }}
    >
      <Typography variant="h1" fontSize={40} color="primary.main">
        A11Y INYERFACE
      </Typography>
      <Container sx={{ width: isMobile ? "100%" : "800px" }}>
        {presentationText}
      </Container>
      <Stack spacing="2em" textAlign="center" justifyContent="center">
        <Stack direction="row" justifyContent="center">
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
        <AppLink text={t("intro-page.start")} link="fruits" />
      </Stack>
    </Container>
  );

  return <PageTextTemplate content={content} />;
};

export default Home;

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
