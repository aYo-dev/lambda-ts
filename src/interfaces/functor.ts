export interface IFunctor<T> {
  map: <A>(f: (v: T) => A) => IFunctor<A>;
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => T | A;
  inspect: (v: string | number) => IFunctor<T>; // Only for test purposes
}
