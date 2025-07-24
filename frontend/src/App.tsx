import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UiContext";
import { RouterPage } from "./pages/RouterPage";

function App() {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </SocketProvider>
    </>
  );
}

export default App;
