import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import MySQL from '../assets/mysql.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#111111] text-white'>
        {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center'>
            <p className='text-4xl font-bold'>My <span className='text-[#10C623]'>Skills</span></p>
            <p className='py-4'>What I have experience in</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={HTML} alt='HTML icon' />
              <p>HTML</p>
            </div>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={CSS} alt='CSS icon' />
              <p>CSS</p>
            </div>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={JavaScript} alt='JavaScript icon' />
              <p>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={Java} alt='Java icon' />
              <p>Java</p>
            </div>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={Python} alt='Python icon' />
              <p>Python</p>
            </div>
            <div className='shadow-md shadow-[#10C623] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto py-4' src={MySQL} alt='MySQL icon' />
              <p>MySQL</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills 