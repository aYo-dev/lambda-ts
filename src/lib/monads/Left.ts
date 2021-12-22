import { Monad } from "../../interfaces/monad";

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
