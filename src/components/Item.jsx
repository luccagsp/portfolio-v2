import React, { useRef, useEffect, useState } from 'react';
import "./item.css"

export default function Item({stack, index}) {
  const imgRef = useRef();
  const [img, setImg] = useState("")
  const icons = ["angular", "astro", "blender", "bootstrap", "css", "docker", "figma", "git", "html", "inkscape", "javascript", "mysql", "python", "react", "svelte", "tailwind"]
  const randomNum = () => Math.random() - 0.5;
  const randomIcons = (icons.sort(randomNum)).slice(0,4)
  randomIcons.push(stack)


  useEffect(() => {
    for (let i = 0; i < randomIcons.length; i++) {
      setTimeout(() => {
        if (i == randomIcons.length -1) {
          imgRef.current.style.filter = 'grayscale(10%)'
          imgRef.current.style.opacity = '1'
          imgRef.current.style.borderRight = '2px'
        }
        setImg(`/icons/${randomIcons[i]}.svg`)
        
      }, 150 * i);
    }    
    
  },[])

  return (
    <div id="item" className=" flex items-center justify-center transition-all">
      <img ref={imgRef} src={img} className="w-24 h-32 caret-violet-500 grayscale-[100%] opacity-10 py-4 px-4" key={index}/>
    </div>
  )
}
