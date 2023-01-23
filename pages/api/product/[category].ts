import type { NextApiRequest, NextApiResponse } from 'next';
import { Product, ProductCategory } from 'src/types/product';
import fruitsData from 'public/product_assets/data/fruits.json';
import dairyCoffeeData from 'public/product_assets/data/dairy_coffee.json';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Product[]>
) {
	const { category } = req.query as { [key: string]: string };

	switch (category.toUpperCase()) {
		case ProductCategory.FLOUR_EGGS:
			res.status(404).end();
			break;

		case ProductCategory.DAIRY_COFFEE:
			res.status(200).json(dairyCoffeeData as Product[]);
			break;

		case ProductCategory.SUGAR_SPICES:
			res.status(404).end();
			break;

		case ProductCategory.BREAD_JAM:
			res.status(404).end();
			break;

		case ProductCategory.FRUITS:
			res.status(200).json(fruitsData as Product[]);
			break;

		default:
			res.status(404).end();
			break;
	}
}
