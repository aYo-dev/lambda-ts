import { IFunctor } from "../interfaces/functor";

export const Right = <T>(value: T): IFunctor<T> => ({
  map: <A>(f: (v: T) => A) => Right(f(value)),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => g(value),
  inspect: (v): IFunctor<T> =>  {
    console.log(v, value);
    return Right(value);
  },
});