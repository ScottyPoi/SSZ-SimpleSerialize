import {IJsonOptions} from "../types";
import Case from "case";

export function toExpectedCase(value, expectedCase = "camel") {
  switch (expectedCase) {
    case "camel":
      return Case.camel(value);
    case "snake":
      return Case.snake(value);
    default:
      return value;
  }
}
