import React, { useState } from 'react'
import {AiOutlineCloseCircle, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
    setNav(!nav)
    }
    
  return (
    <>
      <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>
        <h1 className='w-full text-3xl font-bold primary-color ml-4'>SULTAN . G</h1>
        <ul className='hidden md:flex'>
          <li className='p-5'><a href="#Home">Home</a></li>
          <li className='p-5'><a href="#Company">Company</a></li>
          <li className='p-5'><a href="#Resources">Resources</a></li>
          <li className='p-5'><a href="#About">About</a></li>
          <li className='p-5'><a href="#Contact">Contact</a></li>

        </ul>
        
       
        <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineCloseCircle size={20}/> : <AiOutlineMenu size  ={20}/>}

        </div>
        <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <h1 className='text-3xl primary-color ml-4'>SULTAN . G</h1>
            <ul className='p-8 text-2xl'>
              <li className='p-2'><a href="#Home">Home</a></li>
              <li className='p-2'><a href="#Company">Company</a></li>
              <li className='p-2'><a href="#Resources">Resources</a></li>
              <li className='p-2'><a href="#About">About</a></li>
              <li className='p-2'>,<a href="#Contact">Contact</a></li>

            </ul>

        </div>
        
      </div>
    </>
  )
}

export default Navbar