import { Monad } from "../../interfaces/monad";

const Right = <T, B>(value: T): Monad<T | B> => ({
  map: <A>(f: (v: T) => A) => Right(f(value)),
  chain: <A>(f: (v: T) => Monad<A>) => f(value),
  isLeft: () => false,
  fold: <A>(f: (v: T) => A, g: (v: T) => T) => g(value),
  get: () => value,
  getOrElse: () => value,
  inspect: (v): Monad<T> =>  {
    console.log(v, value);
    return Right(value);
  },
});

Right.of = Right;

export {
  Right,
}
