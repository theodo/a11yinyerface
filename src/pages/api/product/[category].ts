import type { NextApiRequest, NextApiResponse } from "next";

import flourData from "public/product_assets/data/flour.json";
import fruitsData from "public/product_assets/data/fruits.json";
import { Product, ProductCategory } from "src/types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { category } = req.query as { [key: string]: string };

  switch (category.toUpperCase()) {
    case ProductCategory.FRUITS:
      res.status(200).json(fruitsData as Product[]);
      break;

    case ProductCategory.FLOURS:
      res.status(200).json(flourData as Product[]);
      break;

    default:
      res.status(404).end();
      break;
  }
}
