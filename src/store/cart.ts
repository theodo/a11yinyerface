import { atomWithStorage } from "jotai/utils";

import { Product } from "src/types/product";

export type CartStoreItem = {
  [key: string]: { quantity: number; product: Product };
};

export const cartAtom = atomWithStorage<CartStoreItem>("a11yCart", {});
