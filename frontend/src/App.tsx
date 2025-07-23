import { UiProvider } from "./context/UiContext";
import { RouterPage } from "./pages/RouterPage";

function App() {
  return (
    <>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </>
  );
}

export default App;
