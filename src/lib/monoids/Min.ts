import { IMonoid } from "../../interfaces/monoid";

export const Min = (x: number): IMonoid<number> => ({
  get: () => x,
  concat: (y) => Min(x > y.get() ?  y.get() : x),
  inspect: (key) => {
    console.log(key, x);
    return Min(x);
  },
  empty: () => Min(Infinity),
});