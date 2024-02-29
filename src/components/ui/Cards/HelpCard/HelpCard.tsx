import { Box, Button, Paper, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";

interface IHelpCard {
  title: string;
  body: string;
  width?: string;
  withEllipsis: boolean;
}

interface IHelpCardsGroup {
  displayShoppingList?: boolean;
  disability: string;
}

const HelpCard = ({ title, body, width, withEllipsis = false }: IHelpCard) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(!withEllipsis);
  const paperRef = useRef<HTMLDivElement>(null);

  const handleExpansionChange = () => {
    setExpanded(!expanded);
  };

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
      <div
        style={{
          height: expanded ? "auto" : "100px",
          overflow: "hidden",
        }}
        ref={paperRef}
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
      </div>
      {withEllipsis && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleExpansionChange} sx={{ padding: 0 }}>
            <Typography
              sx={{ fontWeight: "bold", color: "black", fontSize: "0.8em" }}
            >
              {expanded
                ? t("help-cards.ellipsis-reduce")
                : t("help-cards.ellipsis-expand")}
            </Typography>
          </Button>
        </Box>
      )}
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
          withEllipsis={false}
        />
      ) : null}
      <HelpCard
        title={t("help-cards.disabilities." + disability + ".title")}
        body={t("help-cards.disabilities." + disability + ".body")}
        width="800px"
        withEllipsis={true}
      />
    </Box>
  );
};

export default HelpCardsGroup;
