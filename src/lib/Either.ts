import { IFunctor } from "../interfaces/functor";
import { Right } from "./Right";
import { Left } from "./Left";

export const Either = <T>(value: T): IFunctor<T> => value ? Right(value) : Left(value);

