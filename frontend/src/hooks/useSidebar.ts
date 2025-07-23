import { useEffect } from "react"
import { useUiContext } from "../context/UiContext"

export function useSidebar(show: boolean) {
  const {onHideMenu,onShowMenu} =useUiContext()

  useEffect(()=>{
    if(show){
      onHideMenu()
    }else{
      onShowMenu()
    }
  },[onHideMenu,onShowMenu,show])
}
