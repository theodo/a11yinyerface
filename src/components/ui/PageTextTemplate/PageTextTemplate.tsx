import { Container } from "@mui/material";
import Image from "next/image";

import LanguageSwitch from "src/components/ui/Buttons/LanguageSwitch";

export interface IPageTextTemplate {
  content: JSX.Element;
}

const PageTextTemplate: React.FC<IPageTextTemplate> = ({ content }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width: "auto",
      }}
    >
      <Container
        sx={{
          height: "140vh",
          width: "140vh",
          backgroundColor: "primary.main",
          opacity: "5%",
          borderRadius: "50%",
          marginTop: "-20vh",
          position: "fixed",
          zIndex: "-1",
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "2em",
          margin: "30px 0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1em",
            alignItems: "center",
          }}
        >
          <Image
            src={require("/public/icons/logo.svg")}
            alt=""
            role="presentation"
            width={160}
            height={40}
            style={{ justifySelf: "top" }}
          />
          <LanguageSwitch />
        </Container>
        <Container
          sx={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          {content}
        </Container>
      </Container>
    </Container>
  );
};

export default PageTextTemplate;
