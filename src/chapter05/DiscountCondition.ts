import { Screening } from "./Screening";

enum DiscountConditionType {
  PERIOD = "PERIOD",
  SEQUENCE = "SEQUENCE",
}

export class DayOfWeek {
  constructor(private day: string) {}

  equals(dayOfWeek: string) {
    return this.day === dayOfWeek;
  }
}
export class DiscountCondition {
  constructor(
    private type: DiscountConditionType,
    private sequence: number,
    private dayOfWeek: DayOfWeek,
    private startAt: Date,
    private endAt: Date
  ) {}
  isSatisfiedBy(screening: Screening): boolean {
    if (this.type === DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening): boolean {
    const screenedAt = screening.getScreenedAt();
    return (
      this.dayOfWeek.equals(
        new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(screenedAt)
      ) &&
      this.startAt >= screenedAt &&
      this.endAt <= screenedAt
    );
  }
  private isSatisfiedBySequence(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
