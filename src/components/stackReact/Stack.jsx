import React from "react";
import "./styles.css"
import "./code.js"

import { useStackStore } from "../../lib/stackStore.js";

export function StackReact({content}) {
  const {stack, setStack} = useStackStore(state => state)

  const handleClick = (stack) => {
    setStack()
  }
  return(
    <div class="mx-auto h-full bg-none">
      <main class="h-full">
        <div class="container flex-col mx-auto items-center flex justify-start h-full">
          <Display/>
        </div>
      </main>
      <div class="relative"></div>
        <nav id="nav" class="w-screen h-10 border-t-2 border-b-2 border-[#3A3A3A] flex justify-center items-center relative">
          <ul class="flex flex-row justify-center items-center h-full">
            <li class="h-full flex items-center mx-7 px-4 justify-center relative delay-1000">
              <button onClick={handleClick(["mysql", "python", "javascript"])} class="font-[500]" type="button">Languages</button>
            </li>
            <li class="h-full flex items-center mx-7 px-4 justify-center relative delay-1000">
              <button onClick={handleClick(["astro", "react", "svelte", "angular"])} class="font-[500]" type="button">Frameworks</button>
            </li>
            <li class="h-full flex items-center mx-7 px-4 justify-center relative delay-1000">
              <button onClick={handleClick(["git", "docker", "figma", "inkscape", "blender"])} class="font-[500]" type="button">Technologies</button>
            </li>
            <li class="h-full flex items-center mx-7 px-4 justify-center relative delay-1000">
              <button onClick={handleClick(["html", "css", "tailwind", "bootstrap"])} class="font-[500]" type="button">Html&Css</button>
            </li>
          </ul>
        </nav>
        <div id="menu-backdrop" className="absolute border-[#3A3A3A] bg-[#D9D9D9] left-[var(--left)] top-[var(--top)] w-[var(--width)] h-[var(--height)] transition-all duration-300 ease-in-out opacity-0 -z-10 border-l-2 border-r-2"></div>
      
    </div>
  )
}