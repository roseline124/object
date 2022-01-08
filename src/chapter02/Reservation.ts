import { Money } from "./Money";
import { Screening } from "./Screening";
import { Customer } from "./Customer";

export class Reservation {
  constructor(
    private customer: Customer,
    private screening: Screening,
    private fee: Money,
    private audienceCount: number
  ) {}
}
