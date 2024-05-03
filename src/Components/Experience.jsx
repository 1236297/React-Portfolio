import React from 'react'

const Experience = () => {
  return (
    <>
      <div>
        <h2 className=' text-white mb-8 text-3xl '>My<span>Experience</span>
        </h2>

        <div className='md-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl sm:max-w-[300px]  mx-auto'>
            <div>
                <p>FirstComapny</p>
                <p className='text-gray-400'>2023-2024</p>
                <p className='text-gray-500'>Description of  your experience in this company
                </p>
            </div>
            <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>
        </div>
      </div>
    </>
  )
}

export default Experience