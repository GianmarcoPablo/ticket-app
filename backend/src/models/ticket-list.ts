import { Ticket } from "./ticket.js";

export class TicketList {
  constructor(
    public ultimoNumero: number = 0,
    public pendientes: Ticket[] = [],
    public asignados: Ticket[] = []
  ) { }

  get siguienteNumero(): number {
    const nuevoTicket = this.ultimoNumero++
    return nuevoTicket + 1
  }

  get ultimos13(): Ticket[] {
    return this.asignados.slice(0, 13)
  }

  createTicket() {
    const nuevoTicket = new Ticket(this.siguienteNumero)
    this.pendientes.push(nuevoTicket)
    return nuevoTicket
  }

  asignarTicket(agente: number, escritorio: number) {
    if (this.pendientes.length === 0) return null
    const siguienteTicket = this.pendientes.shift();
    if (!siguienteTicket) return null;
    siguienteTicket.agente = agente
    siguienteTicket.escritorio = escritorio
    this.asignados.unshift(siguienteTicket)
    console.log(siguienteTicket)
    return siguienteTicket
  }
}
