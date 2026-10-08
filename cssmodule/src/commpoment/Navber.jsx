import Link from "next/link"
const Navber = () => {
  return (
    <>
  <nav className='flex justify-between items-center w-full max-w-5xl mx-auto'>
      <div className='font-bold'>
        Logo
    </div>
    <div className='flex gap-5 justify-end'>
     
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/about">About</Link>
           <Link href="/connect">Connect</Link>
           

        
    </div>
  </nav>
    
    
    
    
    </>
  )
}

export default Navber