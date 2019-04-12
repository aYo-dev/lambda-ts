import { ISemigroup } from "../../interfaces/semigroup";

export const Sum = (x: number): ISemigroup<number> => ({
  get: () => x,
  concat: (y) => Sum(x + y.get()),
  inspect: (key) => {
    console.log(key, x);
    return Sum(x);
  }
})