import React from 'react'
import abouting from '../Assets/about4.jpeg'

 const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
        <div className='flex sm:flex-row-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx;auto'>
            <div>
                <div>
                    <img src={abouting} alt=""
                    className='object-cover rounded-xl h-[300] filter grayscale
                    brigthess-50' />
                </div>
            </div>
            <div>
                <div className='p-2'>
                    <h3 className='text-4xl font-semibold md-5'>About<span className='primary-text'>Me</span></h3>
                    <p className='text-justify leading-7 w-11/12 mx-auto'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Labore voluptatem, quisquam iure commodi quos aspernatur 
                        fuga deserunt vero velit assumenda dolorem sunt atque nesciunt 
                        enim expedita nostrum cum distinctio. Assumenda.
                    </p>

                </div>
            </div>
            <div>
                <div className='flex mt-10 items-center gap-7'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                        <span className='primary-text'>+</span>{''}

                        <p>
                            <span className='md:text-base text-x5'>Projets</span>
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About