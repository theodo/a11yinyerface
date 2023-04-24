import type { NextPage } from "next";
import useSwr from "swr";

import PageGridTemplate, {
  ProductCardTypeEnum,
} from "src/components/ui/PageGridTemplate/PageGridTemplate";
import { useSimulator } from "src/simulators";
import { SIMULATE_EFFECT } from "src/simulators/types";
import { Product } from "src/types/product";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FlourPage: NextPage = () => {
  const { data, error } = useSwr<Product[]>("/api/product/flours", fetcher);

  useSimulator([SIMULATE_EFFECT.DRUNKEN_MOUSE]);

  return (
    <PageGridTemplate
      data={data}
      error={error}
      productCardType={ProductCardTypeEnum.TinyButton}
    />
  );
};

export default FlourPage;
