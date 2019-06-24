import { IMonad } from "./monad";

export interface  IOption<T> {
  map: <A>(f: (v: IMonad<T>) => IMonad<A>) => IOption<A>;
  flatMap: <A>(f: (v: T) => IMonad<A>) => IOption<A>,
  getOrElse: <A>(d: A) => T | A;
  fold: <A>(f: (v: T) => T, d: A) => T | A;
  of: <A>(v: IMonad<A>) => IOption<A> 
}