import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";

import { CartStoreItem, cartAtom } from "src/store/cart";
import {
  ProductCategory,
  productCategoryLabelMapping,
} from "src/types/product";

const menuItems = [
  {
    text: ProductCategory.FRUITS,
    link: "fruits",
    icon: require("/public/icons/apple.svg"),
  },
  {
    text: ProductCategory.FLOURS,
    link: "flour",
    icon: require("/public/icons/flour.svg"),
  },
  {
    text: ProductCategory.DAIRY_COFFEE_EGG,
    link: "egg",
    icon: require("/public/icons/egg.svg"),
  },
];

const Menu: React.FC = () => {
  const { pathname } = useRouter();
  const [cart] = useAtom<CartStoreItem>(cartAtom);

  const cartItemsCount = () => {
    return Object.values(cart).reduce((acc, { quantity }) => {
      return acc + quantity;
    }, 0);
  };

  return (
    <>
      <Box
        display="flex"
        flex="1"
        sx={{ margin: "30px 25px" }}
        justifyContent="space-between"
      >
        <Image
          src={require("/public/icons/logo.svg")}
          alt=""
          role="presentation"
          width={160}
          height={55}
        />
        <Box display="flex" gap={5}>
          {menuItems.map(({ text, link, icon }) => (
            <Link
              key={text}
              href={link}
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                opacity: pathname === `/${link}` ? 1 : 0.5,
                ":hover": {
                  opacity: 1,
                },
              }}
            >
              <Image
                src={icon}
                alt=""
                role="presentation"
                width={23}
                height={23}
              />
              <Typography fontWeight="bold">
                {productCategoryLabelMapping[text]}
              </Typography>
              {pathname === `/${link}` && (
                <Image src={require("/public/icons/dot.svg")} alt=""></Image>
              )}
            </Link>
          ))}
          <Link
            key="Panier"
            href="cart"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px 20px",
              borderRadius: "75px",
              ":hover": {
                backgroundColor: "primary.dark",
              },
              position: "relative",
            }}
          >
            <Typography fontWeight="bold">Panier</Typography>
            <Image
              src={require("/public/icons/white-cart.svg")}
              alt=""
              role="presentation"
            ></Image>
            {cartItemsCount() > 0 && (
              <Typography
                fontSize={12}
                sx={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                  padding: "0px 5px",
                  border: "2px solid",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "-12px",
                  right: "0",
                }}
              >
                {cartItemsCount()}
              </Typography>
            )}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
