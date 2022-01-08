import { DiscountCondition } from "../discountConditions/DiscountCondition";
import { Money } from "../Money";
import { Screening } from "../Screening";

/**
 * 공통된 구현이 필요한 경우 추상클래스 사용.
 * 구현이 각기 다른 경우 인터페이스 사용.
 */
export abstract class DiscountPolicy {
  constructor(
    private fee: Money,
    private discountConditions: DiscountCondition[]
  ) {}

  calculateMovieFee(screening: Screening) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return Boolean(
      this.discountConditions.find((condition) =>
        condition.isSatisfiedBy(screening)
      )
    );
  }

  protected abstract calculateDiscountAmount(): Money;

  protected getFee() {
    return this.fee;
  }
}
