import type { NextApiRequest, NextApiResponse } from "next";

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

    default:
      res.status(404).end();
      break;
  }
}
