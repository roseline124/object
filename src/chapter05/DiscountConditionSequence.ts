import { DiscountCondition } from "./DiscountCondition";
import { Screening } from "./Screening";

export class DiscountConditionSequence implements DiscountCondition {
  constructor(private sequence: number) {}
  isSatisfiedBy(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
