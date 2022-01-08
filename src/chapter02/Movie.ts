import { Money } from "./Money";
import { Screening } from "./Screening";

export class Movie {
  constructor(
    private title: string,
    private runningTime: number,
    private fee: Money,
    private discountPolicy: DiscountPolicy
  ) {}

  getFee() {
    return this.fee;
  }

  calculateMovieFee(screening: Screening) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }
}
