import Link from "next/link"
import { About } from '@/app/main/about/page';
const Navber = () => {
  return (
    <>
  <nav className='flex justify-between'>
      <div className='font-bold'>
        logo
    </div>
    <div className='flex gap-1 m-auto'>
     
           <Link href="/">home</Link>
           <Link href="/about">About</Link>
           <Link href="/connect">Connect</Link>
        
    </div>
  </nav>
    
    
    
    
    </>
  )
}

export default Navber