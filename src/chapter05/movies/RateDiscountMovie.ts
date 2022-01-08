import { Money } from "../Money";
import { Movie } from "./Movie";
import { DiscountCondition } from "../discountConditions/DiscountCondition";

export class RateDiscountMovie extends Movie {
  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountConditions: DiscountCondition[],
    private discountRate: number
  ) {
    super(title, runningTime, fee, discountConditions);
  }

  protected calculateDiscountAmount(): Money {
    return this.getFee().times(this.discountRate);
  }
}
