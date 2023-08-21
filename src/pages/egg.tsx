import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSwr from "swr";

import PageGridTemplate, {
  ProductCardTypeEnum,
} from "src/components/ui/PageGridTemplate/PageGridTemplate";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { Product } from "src/types/product";

import { StaticProps } from "./_app";

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
      translationFile="dairy_coffee_egg"
    />
  );
};

export default EggPage;

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dairy_coffee_egg", "common"])),
    },
  };
}
