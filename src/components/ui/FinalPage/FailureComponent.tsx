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
    <Container>
      <Image src={require("/public/icons/smiley-sad.svg")} alt="" />
      <Typography
        fontSize={60}
        sx={{
          color: "primary.main",
          marginTop: "20px",
        }}
      >
        Dommage,
      </Typography>
      <Typography
        style={{
          fontFamily: "fontFamily",
          fontSize: "20px",
          color: "primary.main",
          marginBottom: "5px",
        }}
      >
        Tu as oublié d&apos;ajouter les ingrédients suivants à ton panier :
        <List sx={{ listStyleType: "disc" }}>
          {missingCartTitles.map((title) => (
            <ListItem sx={{ display: "list-item" }} key={title}>
              {title}
            </ListItem>
          ))}
        </List>
      </Typography>
    </Container>
  );
};

export default FailureComponent;
