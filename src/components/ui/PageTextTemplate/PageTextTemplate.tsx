import { Container } from "@mui/material";
import Image from "next/image";

export interface IPageTextTemplate {
  content: JSX.Element;
}

const PageTextTemplate: React.FC<IPageTextTemplate> = ({ content }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vh",
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
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "-15vh",
        }}
      >
        <Image
          src={require("/public/icons/logo.svg")}
          alt=""
          role="presentation"
          width={160}
          height={55}
        />
        {content}
      </Container>
    </Container>
  );
};

export default PageTextTemplate;
