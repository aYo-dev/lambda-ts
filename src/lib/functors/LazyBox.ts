import { ILazyBoxFunctor } from "../../interfaces/lazyBoxFunctor";

export const LazyBox = (g: Function): ILazyBoxFunctor<Function> => ({
  map: (f: Function): ILazyBoxFunctor<Function> => LazyBox(() => f(g())),
  fold: <A>(f: Function): A => f(g()),
  inspect: (v): ILazyBoxFunctor<Function> => {
    console.log(v, g);
    return LazyBox(g);
  }
})
