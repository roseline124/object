import { DiscountCondition } from "./discountConditions/DiscountCondition";
import { DiscountPolicy } from "./discountPolicies/DiscountPolicy";
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
    private discountPolicy: DiscountPolicy // 합성
  ) {}

  calculateMovieFee(screening: Screening): Money {
    return this.discountPolicy.calculateMovieFee(screening);
  }

  changeDiscountPolicy(discountPolicy: DiscountPolicy) {
    this.discountPolicy = discountPolicy;
  }
}
