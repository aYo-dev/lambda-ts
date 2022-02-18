// Monoids
export { Sum, Product, All, Any, Max, Min } from './lib/monoids';
// Functors
export { LazyBox } from './lib/functors';
// Monads
export { Right, Left, Either, TryCatch } from './lib/monads';

export { 
    Monad,
    IFunctor,
    ILazyBoxFunctor,
    IMonoid,
    IOption,
    ISemigroup,
 } from './interfaces';