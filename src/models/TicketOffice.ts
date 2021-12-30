import { Audience } from "./Audience";
import { Ticket } from "./Ticket";

export class TicketOffice {
  constructor(private cash: number, private tickets: Ticket[]) {}

  sellTicketTo(audience: Audience) {
    const ticket = this.getTicket();
    this.plusCash(audience.buy(ticket));
  }

  private getTicket() {
    return this.tickets.shift();
  }

  private plusCash(cash: number) {
    this.cash += cash;
  }
}
