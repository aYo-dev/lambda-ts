export interface ISemigroup<T> {
  get: () => T,
  concat: (x: ISemigroup<T>) => ISemigroup<T>;
  inspect: (key: string | number) => ISemigroup<T>;
}
