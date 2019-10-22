import { IMonoid } from "../../interfaces/monoid";
import { Any as AnySemigroup  } from '../semigroups/Any';

export const Any = (x: boolean = false): IMonoid<boolean> => ({
  ...AnySemigroup(x),
  empty: () => Any(false),
});
