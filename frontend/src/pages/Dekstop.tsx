import { Navigate, useNavigate } from "react-router";
import { useSidebar } from "../hooks/useSidebar";
import { useState } from "react";
import { getUserStorage } from "../helpers/getUserStorage";
import { useSocketContext } from "../context/SocketContext";
import type { Ticket } from "../interfaces/ticket";



export function Desktop() {

  useSidebar(false)
  const { socket } = useSocketContext()
  const navigate = useNavigate()

  const [user] = useState(getUserStorage());
  const [ticket, setTicket] = useState<Ticket | null>(null)

  if (!user.agent || !user.desktop) {
    Navigate({ to: "/ingresar" })
  }

  function nextTicket() {
    socket.emit("siguiente-ticket-trabajar", user, (ticket: Ticket) => {
      setTicket(ticket)
    })
  }

  function goOut() {
    localStorage.clear()
    navigate("/ingresar")
  }


  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-4xl">{user.agent} </h2>
          <p>
            Usted esta trabajando en eñ escritorio <span>{user.desktop} </span>
          </p>
        </div>
        <button onClick={goOut} className="px-2 py-1 bg-red-700 text-white">Salir</button>
      </div>

      <hr />

      <div className="mt-6 flex items-center justify-between">
        {
          ticket && (
            <h3>
              Esta atendiendo el ticket numero:{" "}
              <span className="text-blue-700">{ticket.numero}</span>{" "}
            </h3>
          )
        }
        <button
          className="px-2 py-1 bg-blue-700 text-white"
          onClick={nextTicket}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
