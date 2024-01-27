import React, { useState, useEffect } from "react";
import { useStackStore } from "../store/stackStore.js";
import Item from "./Item"


export function Display({}) {
  const [divs, setDivs] = useState([]);
  const {currentStack, setCurrentStack} = useStackStore(state => state)
  const elementos = [];

  useEffect(() => {
    setDivs([])
    if (currentStack) {
      setDivs([])
      const crearDiv = (index) => {
        setTimeout(() => {
          setDivs((prevDivs) => [...prevDivs, <Item stack={currentStack[index]} index={index}/>])
        }, 200 * (index))
      }
      for (let i = 0; i < currentStack.length; i++) {
        crearDiv(i)
      }
    }
  },[currentStack])

  return(<div className="flex flex-row w-[90vw] justify-center items-center sm:w-max">{divs}</div>)
}