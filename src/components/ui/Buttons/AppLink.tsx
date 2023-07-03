import { Link } from "@mui/material";
import Image from "next/image";

interface IAppLink {
  text: string;
  link: string;
}

const AppLink: React.FC<IAppLink> = ({ text, link }) => {
  return (
    <Link
      href={link}
      sx={{
        display: "flex",
        width: "fit-content",
        textTransform: "uppercase",
        color: "white",
        padding: "10px 20px",
        borderRadius: "75px",
        backgroundColor: "primary.main",
        ":hover": {
          backgroundColor: "primary.dark",
        },
        alignSelf: "center",
        gap: "10px",
      }}
    >
      {text}
      <Image src={require("public/icons/white-arrow.svg")} alt="" />
    </Link>
  );
};

export default AppLink;
