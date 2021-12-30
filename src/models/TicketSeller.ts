import { TicketOffice } from "./TicketOffice";

export class TicketSeller {
  // 판매원은 자신이 일하는 매표소를 알고 있어야 한다.
  constructor(private ticketOffice: TicketOffice) {}

  getTicketOffice() {
    return this.ticketOffice;
  }
}
