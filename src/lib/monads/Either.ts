import { Monad } from "../../interfaces/monad";
import { Right } from "./Right";
import { Left } from "./Left";

const Either = <T>(value: T): Monad<T> => value ? Right(value) : Left(value);

Either.of = Either;

export {
  Either,
}