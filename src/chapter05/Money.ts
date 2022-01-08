export class Money {
  constructor(public value: number) {}

  static ZERO = new Money(0);

  times(num: number) {
    this.value *= num;
    return this;
  }

  minus(amount: Money) {
    this.value -= amount.value;
    return this;
  }
}
