import { Typography, Paper, Box } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const ObjectiveCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Paper
      sx={{
        minWidth: "330px",
        width: "330px",
        height: "300px",
        borderRadius: "8px",
        textAlign: "left",
        display: "flex",
        padding: "0 20px",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Typography
        sx={{ color: "primary.main", fontWeight: "800", fontSize: "28px" }}
      >
        {t("objective-card.title")}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="left"
      >
        <Typography
          variant="caption"
          sx={{ fontSize: "16px", lineHeight: "130%", margin: "25px 0" }}
        >
          {t("objective-card.description")}
        </Typography>

        <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Image src={require("/public/icons/apple.svg")} alt="" />
            <Typography sx={{ color: "primary.main" }}>
              {t("objective-card.apple")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Image src={require("/public/icons/egg.svg")} alt="" />
            <Typography sx={{ color: "primary.main" }}>
              {" "}
              {t("objective-card.egg")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Image src={require("/public/icons/flour.svg")} alt="" />
            <Typography sx={{ color: "primary.main" }}>
              {t("objective-card.flour")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ObjectiveCard;
