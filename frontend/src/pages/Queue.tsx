import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useSidebar } from "../hooks/useSidebar";
import type { Ticket } from "../interfaces/ticket";

export function Queue() {
  useSidebar(false)

  const { socket } = useSocketContext()
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const getLasts = async () => {
      const response = await fetch("http://localhost:8000/ultimos")
      const data = await response.json()
      setTickets(data.ultimos)
    }
    getLasts()
  }, [])

  useEffect(() => {
    socket.on("tickets-asignados", (asignados) => {
      console.log(asignados)
      setTickets(asignados)
    })
    return () => {
      socket.off("tickets-asignados")
    }
  }, [socket])

  return (
    <>
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-4">
          <h1 className="text-4xl font-bold">Atendiendo al cliente</h1>
          {tickets.map((item) => (
            <div className="border p-2 mb-6 " key={item.numero}>
              <p className="text-5xl font-bold my-6">{item.numero}</p>
              <div className="flex gap-3">
                <button className="rounded-lg bg-orange-300 text-orange-600 px-2 py-1">
                  {item.agente}
                </button>
                <button className="rounded-lg bg-rose-300 text-rose-600 px-2 py-1">
                  {" "}
                  Escritorio {item.escritorio}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4">
          <h3 className="text-center">Historial</h3>

          {tickets.map((item) => (
            <div key={item.numero}>
              <p>Ticket No. {item.numero} </p>
              <div className="flex gap-3">
                <p>
                  En el esritorio{" "}
                  <span className="text-rose-800 bg-rose-200 px-2 py-1">
                    {" "}
                    {item.numero}
                  </span>{" "}
                </p>
                <p>
                  Agente{" "}
                  <span className="text-orange-800 bg-orange-200 px-2 py-1">
                    {" "}
                    {item.agente}{" "}
                  </span>{" "}
                </p>
              </div>

              <hr className="my-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
