import { useSidebar } from "../hooks/useSidebar";
import { useSocketContext } from "../context/SocketContext";
import { useState } from "react";

export function CreateTicket() {

  useSidebar(true)

  const { socket } = useSocketContext()
  const [ticket, setTicket] = useState<{ numero: number, escrtiorio: number }>()

  function nuevoTicket() {
    socket.emit("solicitar-ticket", null, (ticket: any) => {
      setTicket(ticket)
    })
  }

  return (
    <>
      <div className="flex justify-center mx-auto">
        <div>
          <h1 className="text-4xl text-center mb-4">
            Presione el boton para un nuevo ticket
          </h1>
          <button onClick={nuevoTicket} className="flex mx-auto rounded-lg bg-blue-700 px-2 py-1 text-white">
            nuevo ticket
          </button>
          {
            ticket && (
              <p className="text-center mt-10 text-xl">
                Su numero <span>{ticket?.numero} </span>{" "}
              </p>
            )
          }
        </div>
      </div>
    </>
  );
}
