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
}

export const productCategoryLabelMapping: Record<
  keyof typeof ProductCategory,
  string
> = {
  [ProductCategory.FRUITS]: "Fruits",
  [ProductCategory.FLOURS]: "Flours",
};
