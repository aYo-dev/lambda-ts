import { IMonoid } from "../../interfaces/monoid";
import { Product as ProductSemigroup  } from '../semigroups/Product';

export const Product = (x: number): IMonoid<number> => ({
  ...ProductSemigroup(x),
  empty: () => Product(1),
});
