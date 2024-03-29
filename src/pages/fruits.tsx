import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSwr from "swr";

import PageGridTemplate from "src/components/ui/PageGridTemplate/PageGridTemplate";
import { useColorFilterSimulator } from "src/simulators";
import { COLOR_FILTER_ID } from "src/simulators/types";
import { Product } from "src/types/product";

import { StaticProps } from "./_app";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FruitsPage: NextPage = () => {
  const { data, error } = useSwr<Product[]>("/api/product/fruits", fetcher);

  useColorFilterSimulator([COLOR_FILTER_ID.PROTANOPIA]);

  return (
    <PageGridTemplate
      data={data}
      error={error}
      translationFile="fruits"
      disability="color-blindness"
    />
  );
};

export default FruitsPage;

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["fruits", "common"])),
    },
  };
}
