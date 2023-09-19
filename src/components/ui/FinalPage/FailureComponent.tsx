import { List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

interface IFailureComponent {
  missingCartTitles: string[];
}

const FailureComponent: React.FC<IFailureComponent> = ({
  missingCartTitles,
}) => {
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
          Dommage,
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontSize={20} fontWeight={700} textAlign="center">
            Tu as oublié d&apos;ajouter les ingrédients suivants à ton panier :
          </Typography>
          <Typography fontSize={20} fontWeight={700} textAlign="center">
            <List sx={{ listStyleType: "disc" }}>
              {missingCartTitles.map((title) => (
                <ListItem sx={{ display: "list-item", padding: 0 }} key={title}>
                  {title}
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
