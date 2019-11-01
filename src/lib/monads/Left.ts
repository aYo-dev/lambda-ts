import { IMonad } from "../../interfaces/monad";

const Left = <T>(value: T): IMonad<T> => ({
  of: <A>(v: A) => Left.of(v),
  map: <A>(f: (v: T) => A) => Left.of(null),
  flatMap: <A>(f: (v: T) => IMonad<A>) => Left.of(null),
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => f(value),
  inspect: (v): IMonad<T> =>  {
    console.log(v, value);
    return Left.of(value);
  }
});

Left.of = Left;

export {
  Left
}