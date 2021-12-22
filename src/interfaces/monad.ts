import { IFunctor } from "./functor";

export interface IMonad<T> extends IFunctor<T>{
  of: (v: T) => IMonad<T>;
  flatMap: <A>(f: (v: T) => IMonad<A>) => IMonad<A>;
  map: <A>(f: (v: T) => A) => IMonad<A>;
  inspect: (v: string) => IMonad<T>; // Only for test purposes
}

export type Monad<T> = {
  map: <A>(f: (v: T) => A) => Monad<A | T>;
  chain: <A>(f: (v: T) => Monad<A>) => Monad<A>;
  isLeft: () => boolean,
  fold: (f: (v: T) => T, g: (v: T) => T) => Maybe<T>;
  get: () => T,
  getOrElse: <B>(v: B) => Maybe<B | T>,
  inspect: (v: string) => Monad<T>;
};

export type Maybe<T> = T | undefined;
export type Either<T, B> = T | B;