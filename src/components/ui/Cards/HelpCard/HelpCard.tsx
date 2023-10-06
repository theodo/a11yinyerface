import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

interface IHelpCard {
  title: string;
  body: string;
  width?: string;
}

interface IHelpCardsGroup {
  displayShoppingList?: boolean;
  disability: string;
}

const HelpCard: React.FC<IHelpCard> = ({ title, body, width }: IHelpCard) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: { width },
        width: { width },
        backgroundColor: "secondary.main",
        boxShadow: "none",
        borderRadius: "8px",
        padding: "16px",
        marginLeft: "16px",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography>{body}</Typography>
    </Paper>
  );
};

const HelpCardsGroup: React.FC<IHelpCardsGroup> = ({
  displayShoppingList,
  disability,
}) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {displayShoppingList ? (
        <HelpCard
          title={t("help-cards.shopping-list.title")}
          body={t("help-cards.shopping-list.body")}
          width="300px"
        />
      ) : null}
      <HelpCard
        title={t("help-cards.disabilities." + disability + ".title")}
        body={t(t("help-cards.disabilities." + disability + ".body"))}
        width="800px"
      />
    </Box>
  );
};

export default HelpCardsGroup;
