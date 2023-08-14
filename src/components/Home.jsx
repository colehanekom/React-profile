import React from 'react'
import CV from '../assets/Cole Hanekom CV.pdf'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#111111]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-white'><span className='text-[#10C623]'>Hello</span>, I Am</p>
            <h1 className='text-7xl sm:7xl font-bold text-white'>Cole <span className='text-[#10C623]'>Hanekom</span></h1>
           <div> {/*<h2 className='text-2xl sm:7xl py-4 font-semibold text-white'>Full Stack Developer</h2>*/}
            <h2 className='text-2xl sm:7xl py-4 font-semibold text-white'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer',
        2000, // wait 2s before replacing "Full Stack Developer" with "Web Developer"
        'Web Developer',
        2000,
        'Software Developer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
      repeat={Infinity}
        />

      </h2>
      </div>
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