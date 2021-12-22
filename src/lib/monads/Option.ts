import { Monad } from "../../interfaces/monad";
import { IOption } from "../../interfaces/option";

export const Option = <T>(value: Monad<T>): IOption<T> => ({
  map: <A>(f: (v: Monad<T>) => Monad<A>) => Option.of(f(value)),
  chain: <A>(f: (v: T) => Monad<A>) => Option.of(value.chain(f)),
  getOrElse: <A>(def: A) => value.fold(v => v, v => v) || def,
  fold: <A>(f: (v: T) => T, def: A) => value.fold(v => v, v => f(v)) || def,
  of: <A>(v: Monad<A>) => Option.of(v),
});

Option.of = Option;