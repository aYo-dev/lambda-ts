import { IMonoid } from "../../interfaces/monoid";
import { Sum as SumSemigroup  } from '../semigroups/Sum';

export const Sum = (x: number): IMonoid<number> => ({
  ...SumSemigroup(x),
  empty: () => Sum(0),
});
