import { Screening } from "./Screening";

export enum DiscountConditionType {
  PERIOD = "PERIOD",
  SEQUENCE = "SEQUENCE",
}

export class DayOfWeek {
  constructor(private day: string) {}

  equals(dayOfWeek: string) {
    return this.day === dayOfWeek;
  }
}

export interface DiscountCondition {
  isSatisfiedBy: (screening: Screening) => boolean;
}
