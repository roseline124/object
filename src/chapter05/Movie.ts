import { DiscountCondition } from "./discountConditions/DiscountCondition";
import { Money } from "./Money";
import { Screening } from "./Screening";

enum MovieType {
  AMOUNT_DISCOUNT = "AMOUNT_DISCOUNT", // 금액 할인 정책
  RATE_DISCOUNT = "RATE_DISCOUNT", // 비율 할인 정책
  NONE_DISCOUNT = "NONE_DISCOUNT", // 할인 미적용
}

export class Movie {
  constructor(
    private title: string,
    private runningTime: number,
    private fee: Money,
    private discountConditions: DiscountCondition[],
    private movieType: MovieType,
    private discountAmount: Money,
    private discountRate: number
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

  private calculateDiscountAmount(): Money {
    switch (this.movieType) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.calculateAmountDiscountAmount();
      case MovieType.RATE_DISCOUNT:
        return this.calculateRateDiscountAmount();
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountAmount();
      default:
        throw new Error("not supported discount policy");
    }
  }

  private calculateAmountDiscountAmount() {
    return this.discountAmount;
  }

  private calculateRateDiscountAmount() {
    return this.fee.times(this.discountRate);
  }

  private calculateNoneDiscountAmount() {
    return Money.ZERO;
  }
}
