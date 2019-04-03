import { IFunctor } from "./interfaces/functor";

export const EitherMonad = <T>(value: T): IFunctor<T> => value ? Right(value) : Left(value);

const Right = <T>(value: T): IFunctor<T> => ({
  map: <A>(f: (v: T) => A) => Right(f(value)),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => g(value),
  inspect: (v): IFunctor<T> =>  {
    console.log(v, value);
    return Right(value);
  },
});

const Left = <T>(value: T): IFunctor<T> => ({
  map: <A>(f: (v: T) => A) => Left(null),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => f(value),
  inspect: (v): IFunctor<T> =>  {
    console.log(v, value);
    return Left(value);
  },
});
