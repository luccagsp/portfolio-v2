import React, { useEffect } from "react";
import "./styles.css"

export function BookReact(props, index, img, title, col, long) {

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  const endtext = capitalizeFirstLetter(props.title)
  console.log(endtext)

  useEffect(() => {
    const img = new Image();
    img.src = props.img;
  }, [props.img]);

  function MouseEnter() {
    document.documentElement.setAttribute("style", `--color:${props.col}`);
  }
  function MouseLeave() {
    document.documentElement.setAttribute("style", `--color:#fff`);
  }
  if (props.title != "settings"){
    return(
      <a id={`${props.title}`} href={`/${props.title}`} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="item  w-[50px] h-[190px]  sm:w-[40px] sm:h-[180px] 2xl:w-[50px] 2xl:h-[240px]" style={{"--long":props.long,"--i": props.index, "--urlimg": `url(${props.img})`, "--col": props.col}} loading="lazy">
        <p className="flex justify-between flex-col align h-full w-full items-center 2xl:text-2xl" ><span id="title">{endtext}</span><span id="sign"></span></p>
      </a>
    )
  } else {
    return(
      <button id="settings" href={`/${props.title}`} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="item w-[35px] h-[170px] 2xl:w-[50px] 2xl:h-[240px]" style={{"--long":props.long,"--i": props.index, "--urlimg": "url("+props.img+")", "--col": props.col}}>
        <p className="flex justify-between flex-col align h-full w-full items-center 2xl:text-2xl" ><span id="title">{endtext}</span><span id="sign"></span></p>
      </button>
    
    )
  }


}