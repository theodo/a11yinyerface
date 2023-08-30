import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const SuccessComponent = () => {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        rowGap: "1em",
      }}
    >
      <Image src={require("public/icons/congrats.svg")} alt="" />
      <Container sx={{ width: "700px", textAlign: "center" }}>
        <Typography fontSize={60} color="primary.main">
          {t("final-page.success.title")}
        </Typography>
        <Typography fontSize={20} fontWeight={700} textAlign="center">
          {t("final-page.success.subtitle")}
        </Typography>
      </Container>
    </Container>
  );
};

export default SuccessComponent;
