import { Money } from "../Money";
import { DiscountPolicy } from "./DiscountPolicy";

export class NoneDiscountPolicy extends DiscountPolicy {
  constructor(fee: Money) {
    super(fee, []);
  }

  protected calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
