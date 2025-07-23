import { Navigate, useNavigate } from "react-router";
import { useSidebar } from "../hooks/useSidebar";
import { useState } from "react";
import { getUserStorage } from "../helpers/getUserStorage";

export function Desktop() {

  const navigate = useNavigate()
  useSidebar(false)

  function nextTicket() {}
  function goOut() {
    localStorage.clear()
    navigate("/ingresar")
  }

  const [user] = useState(getUserStorage());

  if(!user.agent || !user.desktop){
    Navigate({to: "/ingresar"})
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
        <h3>
          Esta atendiendo el ticket numero:{" "}
          <span className="text-blue-700">50</span>{" "}
        </h3>
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
