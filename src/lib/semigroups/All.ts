import { ISemigroup } from "../../interfaces/semigroup";

export const All = (x: boolean): ISemigroup<boolean> => ({
  get: () => x,
  concat: (y) => All(x && y.get()),
  inspect: (key) => {
    console.log(key, x);
    return All(x);
  }
})