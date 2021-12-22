import { Monad } from "../../interfaces/monad";

// const Left = <T>(value: T): IMonad<T> => ({
//   of: <A>(v: A) => Left.of(v),
//   map: <A>(f: (v: T) => A) => Left.of(null),
//   flatMap: <A>(f: (v: T) => IMonad<A>) => Left.of(null),
//   fold: <A>(f: (v: T) => A, g: (v: T) => T) => f(value),
//   inspect: (v): IMonad<T> =>  {
//     console.log(v, value);
//     return Left.of(value);
//   }
// });

const Left = <T>(value: T): Monad<T> => ({
  map: () => Left(value),
  chain: <A>(f: (v: T) => Monad<A>) => f(value),
  isLeft: () => true,
  fold: <A>(f: (v: T) => A) => f(value),
  get: () => value,
  getOrElse: <B>(dfl: B) => dfl,
  inspect: (v): Monad<T> =>  {
    console.log(v, value);
    return Left(value);
  },
});

Left.of = Left;

export {
  Left,
};
