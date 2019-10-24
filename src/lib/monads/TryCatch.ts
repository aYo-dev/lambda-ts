import { Left } from "./Left";
import { Right } from "./Right";
import { IMonad } from "../../interfaces/monad";

export const TryCatch = <T>(f: () => T): IMonad<T> => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};
