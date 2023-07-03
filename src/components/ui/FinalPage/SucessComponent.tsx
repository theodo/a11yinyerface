import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

const SuccessComponent = (
  <Container>
    <Image src={require("public/icons/congrats.svg")} alt="" />
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
      tu as réussi à commander les ingrédients pour réaliser ta tarte aux pommes
    </Typography>
  </Container>
);

export default SuccessComponent;
