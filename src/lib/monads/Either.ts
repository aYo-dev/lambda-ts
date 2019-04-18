import { IMonad } from "../../interfaces/monad";
import { Right } from "./Right";
import { Left } from "./Left";

const Either = <T>(value: T): IMonad<T> => value ? Right.of(value) : Left.of(value);

Either.of = Either;

export {
  Either,
}