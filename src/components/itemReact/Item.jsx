import React from "react"; 
import "./styles.css"
import { useStackStore } from "../../store/stackStore.js";


export function ItemReact({file}) {
  return(
    <div>
      <span>{file}</span>
    </div>
  )
}