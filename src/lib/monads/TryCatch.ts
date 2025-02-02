import { Left } from "./Left";
import { Right } from "./Right";
import { Monad } from "../../interfaces/monad";

export const TryCatch = <T>(f: () => T): Monad<T> => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};
