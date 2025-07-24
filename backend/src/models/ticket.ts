import { v4 as uuid } from "uuid"

export class Ticket {
  constructor(
    public numero: number,
    public id = uuid(),
    public escritorio: number | null  = null,
    public agente: number | null = null,
  ) { }
}
