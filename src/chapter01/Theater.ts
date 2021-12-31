import { TicketSeller } from "./TicketSeller";
import { Audience } from "./Audience";

export class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  enter(audience: Audience) {
    this.ticketSeller.sellTicketTo(audience);
  }
}
