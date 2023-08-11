import React from 'react'
import CV from '../assets/Cole Hanekom CV.pdf'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#111111]'>
    
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-white'><span className='text-[#10C623]'>Hello</span>, I Am</p>
            <h1 className='text-7xl sm:7xl font-bold text-white'>Cole <span className='text-[#10C623]'>Hanekom</span></h1>
            <h2 className='text-2xl sm:7xl py-4 font-semibold text-gray-200'>Full Stack Developer</h2>
            <div>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button className='text-white border-2 bg-[#10C623] px-4 py-2 my-2 rounded-md flex items-center '>Download CV</button>
            </a>
            </div>
        </div>
    </div> 

  )
}

export default Home 