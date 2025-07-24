import { useNavigate, redirect, Navigate } from "react-router";
import { useSidebar } from "../hooks/useSidebar";
import { useState } from "react";
import { getUserStorage } from "../helpers/getUserStorage";

export function Open() {
  const [agent, setAgent] = useState<string>("")
  const [desktop, setDesktop] = useState<string>("")

  const [user] = useState(getUserStorage())
  useSidebar(false)
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("agente", agent!)
    localStorage.setItem("escritorio", desktop!)
    navigate("/escritorio", { replace: false });
  };

  if (user.agent && user.desktop) {
    return <Navigate to="/escritorio" replace />;
  }

  return (
    <>
      <h2 className="text-4xl font-bold ">Ingresar</h2>
      <span className="my-2">Ingrese su nombre y numero de escritorio</span>
      <hr className="mb-4" />
      <form onSubmit={onSubmit}>
        <input
          placeholder="Nombre del agente"
          type="text"
          className="w-full border mb-1 px-2 py-1"
          value={agent}
          onChange={(e) => {
            setAgent(e.target.value)
          }}
        />
        <input
          placeholder="Numero del escritorio"
          type="number"
          className="w-full border px-2 py-1"
          value={desktop}
          onChange={(e) => {
            setDesktop(e.target.value)
          }}
        />

        <button
          className="px-2 py-1 bg-blue-800 text-white rounded-lg mt-4"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </>
  );
}
