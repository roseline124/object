import { DayOfWeek, DiscountCondition } from "./DiscountCondition";
import { Screening } from "./Screening";

export class DiscountConditionPeriod implements DiscountCondition {
  constructor(
    private dayOfWeek: DayOfWeek,
    private startAt: Date,
    private endAt: Date
  ) {}

  isSatisfiedBy(screening: Screening): boolean {
    const screenedAt = screening.getScreenedAt();
    return (
      this.dayOfWeek.equals(
        new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(screenedAt)
      ) &&
      this.startAt >= screenedAt &&
      this.endAt <= screenedAt
    );
  }
}
