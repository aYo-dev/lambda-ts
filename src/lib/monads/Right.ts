import { IMonad } from "../../interfaces/monad";

const Right = <T>(value: T): IMonad<T> => ({
  of: (v: T) => Right.of(v),
  map: <A>(f: (v: T) => A) => Right.of(f(value)),
  flatMap: <A>(f: (v: T) => IMonad<A>) => f(value),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => g(value),
  inspect: (v): IMonad<T> =>  {
    console.log(v, value);
    return Right.of(value);
  }
});

Right.of = Right;

export {
  Right
}