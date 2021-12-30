import { Ticket } from "./Ticket";

export class TicketOffice {
  constructor(private cash: number, private tickets: Ticket[]) {}

  getTicket() {
    return this.tickets.shift();
  }

  plusCash(cash: number) {
    this.cash += cash;
  }

  minusCash(cash: number) {
    this.cash -= cash;
  }
}
