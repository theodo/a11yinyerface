import { List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface IFailureComponent {
  missingCart: { title: string; category: string }[];
}

const FailureComponent: React.FC<IFailureComponent> = ({ missingCart }) => {
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
      <Image src={require("/public/icons/smiley-sad.svg")} alt="" />
      <Container sx={{ width: "700px", textAlign: "center" }}>
        <Typography fontSize={60} color="primary.main">
          {t("final-page.failure.title")}
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontSize={20} fontWeight={700} textAlign="center">
            {t("final-page.failure.subtitle")}
          </Typography>
          <Typography fontSize={20} fontWeight={700} textAlign="center">
            <List sx={{ listStyleType: "disc" }}>
              {missingCart.map((item) => (
                <ListItem sx={{ display: "list-item" }} key={item.title}>
                  {t(item.category + ":" + item.title + ".title")}
                </ListItem>
              ))}
            </List>
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default FailureComponent;
