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
  "FLOURS" = "FLOURS",
  "DAIRY_COFFEE_EGG" = "DAIRY_COFFEE_EGG",
}

export const productCategoryLabelMapping: Record<
  keyof typeof ProductCategory,
  string
> = {
  [ProductCategory.FRUITS]: "FRUITS",
  [ProductCategory.FLOURS]: "FARINE",
  [ProductCategory.DAIRY_COFFEE_EGG]: "OEUF",
};
