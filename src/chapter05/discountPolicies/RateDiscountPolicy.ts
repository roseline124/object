import { Money } from "../Money";
import { DiscountPolicy } from "./DiscountPolicy";
import { DiscountCondition } from "../discountConditions/DiscountCondition";

export class RateDiscountPolicy extends DiscountPolicy {
  constructor(
    fee: Money,
    discountConditions: DiscountCondition[],
    private discountRate: number
  ) {
    super(fee, discountConditions);
  }

  protected calculateDiscountAmount(): Money {
    return this.getFee().times(this.discountRate);
  }
}
