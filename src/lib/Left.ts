import { IFunctor } from "../interfaces/functor";

export const Left = <T>(value: T): IFunctor<T> => ({
  map: <A>(f: (v: T) => A) => Left(null),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => f(value),
  inspect: (v): IFunctor<T> =>  {
    console.log(v, value);
    return Left(value);
  },
});