import { Container, CircularProgress, Grid } from "@mui/material";
import type { NextPage } from "next";
import AppBar from "components/ui/AppBar/AppBar";
import useSwr from "swr";
import ProductCardImage from "src/components/ui/Cards/ProductCardImage/ProductCardImage";
import { Product } from "src/types/product";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { shuffle } from "lodash-es";

const LoremIpsumScrambledPage: NextPage = () => {
  useSimulator([SIMULATE_EFFECT.SCRAMBLE_LETTER]);

  return (
    <>
      <AppBar />
      <Container>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Container>
    </>
  );
};

export default LoremIpsumScrambledPage;
