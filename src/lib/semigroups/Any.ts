import { ISemigroup } from "../../interfaces/semigroup";

export const Any = (x: boolean): ISemigroup<boolean> => ({
  get: () => x,
  concat: (y) => Any(x || y.get()),
  inspect: (key) => {
    console.log(key, x);
    return Any(x);
  }
})