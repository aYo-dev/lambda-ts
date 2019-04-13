import { ISemigroup } from "./semigroup";

export interface IMonoid<T> extends ISemigroup<T> {
  empty: () => IMonoid<T>
}
