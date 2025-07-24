import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "../layout/Layout";
import { Open } from "./Open";
import { Queue } from "./Queue";
import { CreateTicket } from "./CreateTicket";
import { Desktop } from "./Dekstop";

export function RouterPage() {



  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/ingresar" replace />} />

          {/* Layout con sidebar */}
          <Route path="/" element={<Layout />}>
            <Route path="ingresar" element={<Open />} />
            <Route path="cola" element={<Queue />} />
            <Route path="crear" element={<CreateTicket />} />
            <Route path="escritorio" element={<Desktop />} />
          </Route>

          {/* Ruta 404 opcional */}
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
