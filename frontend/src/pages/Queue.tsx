import { useSidebar } from "../hooks/useSidebar";

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Carlos Castro",
  },
];

export function Queue() {
    useSidebar(false)

  return (
    <>
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-4">
          <h1 className="text-4xl font-bold">Atendiendo al cliente</h1>
          {data.map((item) => (
            <div className="border p-2 mb-6 " key={item.ticketNo}>
              <p className="text-5xl font-bold my-6">{item.ticketNo}</p>
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

          {data.map((item) => (
            <div key={item.ticketNo}>
              <p>Ticket No. {item.ticketNo} </p>
              <div className="flex gap-3">
                <p>
                  En el esritorio{" "}
                  <span className="text-rose-800 bg-rose-200 px-2 py-1">
                    {" "}
                    {item.ticketNo}
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
