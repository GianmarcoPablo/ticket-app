import { createContext, useContext } from "react";
import { useSocket } from "../hooks/useSocket";
import type { Socket } from "socket.io-client";

interface SocketContextType {
  socket:Socket,
  online: boolean
}

export const SocketContext = createContext<SocketContextType | null>(null)

export function SocketProvider({ children }: { children: React.ReactNode }) {

  const { socket, online } = useSocket({ serverPath: "http://localhost:8000" });

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
}


export const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext must be used within a SocketProvider");
  }
  return context;
};
