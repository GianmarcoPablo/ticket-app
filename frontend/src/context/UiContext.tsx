import {
  useContext,
  useState,
  createContext
} from "react";


interface AppContextType {
  showMenu: boolean
  onShowMenu: ()=> void
  onHideMenu: ()=> void
}


export const UiContext = createContext<AppContextType | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  function onShowMenu(): void {
    setShowMenu(true)
  }

  function onHideMenu(): void {
    setShowMenu(false)
  }

  return (
    <UiContext.Provider value={{
      onHideMenu,
      onShowMenu,
      showMenu
    }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUiContext(): AppContextType  {
  const context = useContext(UiContext)
  if (!context) throw "No context provider"
  return context
}
