import { useSidebar } from "../hooks/useSidebar";

export function CreateTicket() {

  useSidebar(true)
  function nuevoTicket() {}

  return (
    <>
      <div className="flex justify-center mx-auto">
        <div>
          <h1 className="text-4xl text-center mb-4">
            Presione el boton para un nuevo ticket
          </h1>
          <button className="flex mx-auto rounded-lg bg-blue-700 px-2 py-1 text-white">
            nuevo ticket
          </button>
          <p className="text-center mt-10 text-xl">
            Su numero <p>55</p>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
