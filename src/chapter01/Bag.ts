import is from "@sindresorhus/is";
import { Ticket } from "./Ticket";
import { Invitation } from "./Invitation";

export class Bag {
  private ticket?: Ticket; // 티켓

  constructor(private cash: number, private invitation?: Invitation) {}

  hasTicket() {
    return !is.nullOrUndefined(this.ticket);
  }

  setTicket(ticket: Ticket) {
    if (!this.hasInvitation()) {
      this.minusCash(ticket.getFee());
      this.ticket = ticket;
      return 0;
    }

    this.ticket = ticket;
    return ticket.getFee();
  }

  private hasInvitation() {
    return !is.nullOrUndefined(this.invitation);
  }

  private minusCash(cash: number) {
    if (this.cash - cash < 0) {
      throw new Error("no cash. no cash.");
    }

    this.cash -= cash;
  }
}
