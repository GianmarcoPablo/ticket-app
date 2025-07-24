import { Server as SocketIOServer } from "socket.io";
import { TicketList } from "./models/ticket-list.js";

export class Sockets {
  private isInitialized = false;

  constructor(
    private readonly io: SocketIOServer,
    private ticketList: TicketList
  ) { }

  private socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado:");
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.createTicket()
        callback(nuevoTicket)
      })

      socket.on("siguiente-ticket-trabajar", (usuario, callback) => {
        const { agent, desktop } = usuario
        const suTicket = this.ticketList.asignarTicket(agent, desktop)
        callback(suTicket)
        console.log({ arreglo: this.ticketList.ultimos13 })
        this.io.emit("tickets-asignados", this.ticketList.ultimos13)
      })

    });
  }

  public init() {
    if (this.isInitialized) return;
    this.socketEvents();
    this.isInitialized = true;
  }
}
