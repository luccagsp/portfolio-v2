import React from "react";
import "./styles.css"
import { useStackStore } from "../../store/stackStore.js";


export function ClickReact({content, stack}) {
  const {currentStack, setCurrentStack} = useStackStore(state => state)
  const handleClick = () => {
    setCurrentStack(stack)
  
  }
  return(
    <li id="itemli" className="h-full flex items-center justify-center relative delay-1000">
      <button onClick={handleClick} className="font-[500] w-full px-4  h-full text-xl md:text-lg" type="button">{content}</button>
    </li>
  )
}