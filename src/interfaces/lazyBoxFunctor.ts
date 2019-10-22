export interface ILazyBoxFunctor<T>  {
  map: (f: Function) => ILazyBoxFunctor<Function>,
  fold: <A>(v: T) => A,
  inspect: (v: string | number) => ILazyBoxFunctor<Function> // Only for test purposes
};