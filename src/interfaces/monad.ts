import { IFunctor } from "./functor";

export interface IMonad<T> extends IFunctor<T>{
  of: (v: T) => IMonad<T>;
  flatMap: <A>(f: (v: T) => IMonad<A>) => IMonad<A>;
  map: <A>(f: (v: T) => A) => IMonad<A>;
  inspect: (v: string) => IMonad<T>; // Only for test purposes
}
