import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

const SuccessComponent = (
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
        Félicitations,
      </Typography>
      <Typography fontSize={20} fontWeight={700} textAlign="center">
        tu as réussi à commander les ingrédients pour réaliser ta tarte aux
        pommes
      </Typography>
    </Container>
  </Container>
);

export default SuccessComponent;
