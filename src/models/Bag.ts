import is from "@sindresorhus/is";
import { Ticket } from "./Ticket";
import { Invitation } from "./Invitation";

export class Bag {
  private ticket?: Ticket; // 티켓

  constructor(private cash: number, private invitation?: Invitation) {}

  hasTicket() {
    return !is.nullOrUndefined(this.ticket);
  }

  hasInvitation() {
    return !is.nullOrUndefined(this.invitation);
  }

  plusCash(cash: number) {
    this.cash += cash;
  }

  minusCash(cash: number) {
    if (this.cash - cash < 0) {
      throw new Error("no cash. no cash.");
    }

    this.cash -= cash;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }
}
