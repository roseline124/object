import { Money } from "../Money";
import { DiscountPolicy } from "./DiscountPolicy";
import { DiscountCondition } from "../discountConditions/DiscountCondition";

export class AmountDiscountPolicy extends DiscountPolicy {
  constructor(
    fee: Money,
    discountConditions: DiscountCondition[],
    private discountAmount: Money
  ) {
    super(fee, discountConditions);
  }

  protected calculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}
