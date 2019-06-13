import { IFunctor } from "../../interfaces/functor";

type ILazyBox = <T, A>() => A;

const LazyBox = <T>(g: () => T): IFunctor<() => T> => ({
  map: <A>(f: (v: T) => A): IFunctor<() => A> => LazyBox(() => f(g())),
  fold: <A>(f: (v: T) => A): A => f(g()),
  inspect: (v): IFunctor<() => T> => {
    console.log(v, g);
    return LazyBox(g);
  }
})