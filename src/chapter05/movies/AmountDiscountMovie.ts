import { Money } from "../Money";
import { Movie } from "./Movie";
import { DiscountCondition } from "../discountConditions/DiscountCondition";

export class AmountDiscountMovie extends Movie {
  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountConditions: DiscountCondition[],
    private discountAmount: Money
  ) {
    super(title, runningTime, fee, discountConditions);
  }

  protected calculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}
