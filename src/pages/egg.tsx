import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import useSwr from "swr";

import PageGridTemplate, {
  ProductCardTypeEnum,
} from "src/components/ui/PageGridTemplate/PageGridTemplate";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { Product } from "src/types/product";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EggPage: NextPage = () => {
  const { data, error } = useSwr<Product[]>(
    "/api/product/dairy_coffee_egg",
    fetcher
  );

  useSimulator([SIMULATE_EFFECT.DISTRACTIONS]);

  if (data === undefined || error) {
    return <CircularProgress />;
  }
  return (
    <PageGridTemplate
      data={data}
      error={error}
      productCardType={ProductCardTypeEnum.Text}
    />
  );
};

export default EggPage;
