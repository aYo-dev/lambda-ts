
import { IMonoid } from "../../interfaces/monoid";

export const Max = (x: number = -Infinity): IMonoid<number> => ({
  get: () => x,
  concat: (y) => Max(x > y.get() ? x : y.get()),
  inspect: (key) => {
    console.log(key, x);
    return Max(x);
  },
  empty: () => Max(-Infinity),
});
