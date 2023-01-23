export class Product {
	id!: string;
	title!: string;
	description!: string;
	price!: string;
	previewImageUrl!: string;
	category!: ProductCategory;
}

export enum ProductCategory {
	'FLOUR_EGGS' = 'FLOUR_EGGS',
	'DAIRY_COFFEE' = 'DAIRY_COFFEE',
	'SUGAR_SPICES' = 'SUGAR_SPICES',
	'BREAD_JAM' = 'BREAD_JAM',
	'FRUITS' = 'FRUITS',
}

export const productCategoryLabelMapping: Record<
	keyof typeof ProductCategory,
	string
> = {
	[ProductCategory.FLOUR_EGGS]: 'Flour & Eggs',
	[ProductCategory.DAIRY_COFFEE]: 'Dairy & Coffee',
	[ProductCategory.SUGAR_SPICES]: 'Sugar & Spices',
	[ProductCategory.BREAD_JAM]: 'Bread & Jam',
	[ProductCategory.FRUITS]: 'Fruits',
};
