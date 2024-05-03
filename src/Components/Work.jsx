import React from 'react'
import Proj1 from  '../Assets/qr.jpg'
import Proj2 from  '../Assets/3col.jpg'
import Proj3 from  '../Assets/Landing.jpg'
import Proj4 from  '../Assets/news.jpg'

const Work = () => {
  return (
    <>
    <div className='py-6 max-w-[1200px] mx-auto '>
            <div className='mx-auto px-4 md:px-8'>
                <h2 className='text-white md-4 flex items-center justify-between '>
                    My <span>Project</span>
                    
                </h2>
                <p className='text-gray-500'>
                    These are my latest projects for different clients.
                </p>

          
            <div className='grid gap-4 grid-cols-2 md:gap-6 sm:grid-cols-3 xl:gap-8'>
                <a href='/' className=' group  h-48  overflow-hidden rounded-lg shadow-lg md:h-80'>
                  <img src={Proj1} loading='lazy' alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />  
                  {/* <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transperent
                  to-transparent opacity-50'>

                  </div> */}
                </a>
                <a href='/' className=' group  h-48  overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                  <img src={Proj2} loading='lazy' alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />  
                  {/* <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transperent
                  to-transparent opacity-50'>

                  </div> */}
                </a>
                <a href='/' className=' group  h-48  overflow-hidden rounded-lg shadow-lg  md:col-span-2 md:h-80'>
                  <img src={Proj3} loading='lazy' alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />  
                  {/* <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transperent
                  to-transparent opacity-50'>

                  </div> */}
                </a>
                <a href='/' className=' group  h-48  overflow-hidden rounded-lg shadow-lg md:h-80'>
                  <img src={Proj4} loading='lazy' alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />  
                  {/* <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transperent
                  to-transparent opacity-50'>

                  </div> */}
                </a>
              
              
                
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Work