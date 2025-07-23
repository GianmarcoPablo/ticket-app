// layouts/DashboardLayout.tsx
import { Outlet, NavLink } from "react-router-dom";
import { useUiContext } from "../context/UiContext";

export default function Layout() {
  const { showMenu } = useUiContext();

  return (
    <div className="flex min-h-screen">
      {showMenu && (
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-6">Mi App</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/ingresar"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              Ingresar
            </NavLink>
            <NavLink
              to="/cola"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              Cola
            </NavLink>
            <NavLink
              to="/crear"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              Crear
            </NavLink>
            <NavLink
              to="/escritorio"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              Escritorio
            </NavLink>
          </nav>
        </aside>
      )}

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
