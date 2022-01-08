import { Movie } from "./Movie";
import { Reservation } from "./Reservation";
import { Customer } from "./Customer";

export class Screening {
  constructor(
    private movie: Movie,
    private seq: number,
    private sceenedAt: Date
  ) {}

  getStartTime() {
    return this.sceenedAt;
  }

  isSequence(seq: number) {
    return this.seq === seq;
  }

  reserve(customer: Customer, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
