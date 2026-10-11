"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navber = () => {
  const pathname = usePathname();
  return (
    <>
  <div className="fixed top-0 inset-x-0 bg-black p-5">
    <nav className='flex justify-between items-center w-full max-w-5xl mx-auto  '>
      <div className='font-bold '>
        Logo
    </div>
    <div className='flex gap-5 justify-end'>
     
           <Link href="/" className={pathname === "/"? "text-blue-500 font-bold" : "text-white hover:text-blue-500" }>Home</Link>
           <Link href="/about">About</Link>
           <Link href="/about">About</Link>
           <Link href="/connect">Connect</Link>


           

        
    </div>
  </nav>
    
  </div>
    
    
    
    </>
  )
}

export default Navber