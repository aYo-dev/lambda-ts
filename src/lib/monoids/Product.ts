import { IMonoid } from "../../interfaces/monoid";
import { Product as ProductSemigroup  } from '../semigroups/Product';

export const Product = (x: number = 1): IMonoid<number> => ({
  ...ProductSemigroup(x),
  empty: () => Product(1),
});
