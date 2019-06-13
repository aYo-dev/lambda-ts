export interface IFunctor<T> {
  map: <A>(f: (v: T) => A) => IFunctor<A>;
  fold: (f: (v: T) => T, g: (v: T) => T) => T;
  inspect: (v: string | number) => IFunctor<T>; // Only for test purposes
}
