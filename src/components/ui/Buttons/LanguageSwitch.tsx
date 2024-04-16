import { Box, Divider, Link } from "@mui/material";
import { useRouter } from "next/router";

const LanguageSwitch: React.FC = () => {
  const router = useRouter();
  const { pathname, locale } = router;

  return (
    <Box display="flex" gap={1} height="fit-content" width="fit-content">
      <Link
        component="button"
        underline="none"
        onClick={() => {
          router.replace(pathname, pathname, { locale: "en" });
        }}
        aria-label="Switch to English"
        padding="0"
        sx={{ color: "primary.main" }}
        style={{ padding: "0", margin: "0" }}
        fontWeight={locale === "en" ? "bold" : "normal"}
      >
        EN
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link
        component="button"
        underline="none"
        onClick={() => {
          router.replace(pathname, pathname, { locale: "fr" });
        }}
        aria-label="Switch to French"
        sx={{ color: "primary.main" }}
        fontWeight={locale === "fr" ? "bold" : "normal"}
      >
        FR
      </Link>
    </Box>
  );
};

export default LanguageSwitch;
