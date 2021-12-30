import { Bag } from "./Bag";

export class Audience {
  constructor(private bag: Bag) {}

  getBag() {
    return this.bag;
  }
}
