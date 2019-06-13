export interface ILazyBoxFunctor<T>  {
  map: (f: ()  => T) => ILazyBoxFunctor<Function>,
  fold: <A>(f: Function) => A,
  inspect: (v: string | number) => ILazyBoxFunctor<Function> // Only for test purposes
};