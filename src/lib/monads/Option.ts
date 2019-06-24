import { IMonad } from "../../interfaces/monad";
import { IOption } from "../../interfaces/option";

export const Option = <T>(value: IMonad<T>): IOption<T> => ({
  map: <A>(f: (v: IMonad<T>) => IMonad<A>) => Option.of(f(value)),
  flatMap: <A>(f: (v: T) => IMonad<A>) => Option.of(value.flatMap(f)),
  getOrElse: <A>(def: A) => value.fold(v => v, v => v) || def,
  fold: <A>(f: (v: T) => T, def: A) => value.fold(v => v, v => f(v)) || def,
  of: <A>(v: IMonad<A>) => Option.of(v),
});

Option.of = Option;