"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const Navber = () => {
  const [dark , setdark] = useState(false)
  const pathname = usePathname();
  return (
    <>
  <div className="fixed top-0 inset-x-0 bg-black p-5">
    <nav className='flex justify-between items-center w-full max-w-5xl mx-auto  '>
      <div className='font-bold cursor-pointer '>
      <Link href="/"> Logo</Link>
    </div>
    <div className='flex gap-5 justify-end'>
     
           <Link href="/" className={pathname === "/"? "text-blue-500 font-bold" : "text-white hover:text-blue-500" }>Home</Link>
           <Link href="/about" className={pathname=== "/about"? "text-blue-500 font-bold": "text-white hover:text-blue-500"}>About</Link>
           <Link href="/blog" className={pathname=== "/blog"? "text-blue-500 font-bold": "text-white hover:text-blue-500"}>Blog</Link>
           <Link href="/connect" className={pathname=== "/connect"? "text-blue-500 font-bold": "text-white hover:text-blue-500"}>Connect</Link>
           <button onClick={()=>{ const newDark = !dark;
    setdark(newDark);
    document.body.classList.toggle("dark", newDark);  }}> {dark ? "Dark": "Light"}</button>


           

        
    </div>
  </nav>
    
  </div>
    
    
    
    </>
  )
}

export default Navber