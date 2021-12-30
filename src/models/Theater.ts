import { TicketSeller } from "./TicketSeller";
import { Audience } from "./Audience";

export class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  enter(audience: Audience) {
    const ticketOffice = this.ticketSeller.getTicketOffice();
    const ticket = ticketOffice.getTicket();
    const audienceBag = audience.getBag();

    if (!audienceBag.hasInvitation()) {
      const ticketFee = ticket.getFee();

      audienceBag.minusCash(ticketFee);
      ticketOffice.plusCash(ticketFee);
    }

    audienceBag.setTicket(ticket);
  }
}
