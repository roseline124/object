import { Movie } from "./Movie";

export class Customer {}
export class Reservation {}

export class Screening {
  private sequence: number; // 영화 상영 순번
  private screenedAt: Date; // 상영 시간

  constructor(private readonly movie: Movie) {}
  reserve(customer: Customer, audienceCount: number): Reservation {
    return this.calculateFee(audienceCount);
  }

  getSequence() {
    return this.sequence;
  }

  getScreenedAt() {
    return this.screenedAt;
  }

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
