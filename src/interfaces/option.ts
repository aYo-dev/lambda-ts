import { Monad } from "./monad";

export interface  IOption<T> {
  map: <A>(f: (v: Monad<T>) => Monad<A>) => IOption<A>;
  chain: <A>(f: (v: T) => Monad<A>) => IOption<A>,
  getOrElse: <A>(d: A) => T | A;
  fold: <A>(f: (v: T) => T, d: A) => T | A;
  of: <A>(v: Monad<A>) => IOption<A> 
}