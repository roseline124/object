import { Money } from "../Money";
import { Movie } from "./Movie";

export class NoneDiscountMovie extends Movie {
  constructor(title: string, runningTime: number, fee: Money) {
    super(title, runningTime, fee, []);
  }

  protected calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
