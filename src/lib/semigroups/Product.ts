import { ISemigroup } from "../../interfaces/semigroup";

export const Product = (x: number): ISemigroup<number> => ({
  get: () => x,
  concat: (y) => Product(x * y.get()),
  inspect: (key) => {
    console.log(key, x);
    return Product(x);
  }
})