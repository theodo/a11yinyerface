export class Product {
  id!: string;
  title!: string;
  description!: string;
  price!: string;
  previewImageUrl!: string;
  category!: ProductCategory;
}

export enum ProductCategory {
  "FRUITS" = "FRUITS",
  "FLOUR" = "FLOUR",
  "DAIRY_COFFEE_EGG" = "DAIRY_COFFEE_EGG",
}

export const productCategoryLabelMapping: Record<
  keyof typeof ProductCategory,
  string
> = {
  [ProductCategory.FRUITS]: "product-category.fruit",
  [ProductCategory.FLOUR]: "product-category.flour",
  [ProductCategory.DAIRY_COFFEE_EGG]: "product-category.dairy-coffee-egg",
};
