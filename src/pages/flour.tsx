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

const FlourPage: NextPage = () => {
  const { data, error } = useSwr<Product[]>("/api/product/flour", fetcher);

  useSimulator([SIMULATE_EFFECT.DRUNKEN_MOUSE]);

  return (
    <PageGridTemplate
      data={data}
      error={error}
      productCardType={ProductCardTypeEnum.TinyButton}
      translationFile="flour"
    />
  );
};

export default FlourPage;

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["flour", "common"])),
    },
  };
}
