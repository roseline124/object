export class Money {
  ZERO = Money.wons(0);

  constructor(private amount: number) {}

  static wons(amount: number) {
    return new Money(amount);
  }

  times(percent: number) {
    return new Money(this.amount * percent);
  }

  minus(money: Money) {
    this.amount -= money.amount;
    return this;
  }
}
