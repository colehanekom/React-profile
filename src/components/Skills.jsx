import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import MySQL from '../assets/mysql.svg';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#111111] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 pt-24'>
        <div className='text-center'>
          <p className='text-2xl md:text-3xl lg:text-7xl font-bold mb-2'>
            My <span className='text-[#10C623]'>Skills</span>
          </p>
          <p className='pt-4 text-sm sm:text-base md:text-lg lg:text-2xl'>
            What I have experience in
          </p>
        </div>

        {/* Skills */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={HTML} alt='HTML icon' />
            <p className='text-xs sm:text-sm'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={CSS} alt='CSS icon' />
            <p className='text-xs sm:text-sm'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={JavaScript} alt='JavaScript icon' />
            <p className='text-xs sm:text-sm'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={Java} alt='Java icon' />
            <p className='text-xs sm:text-sm'>Java</p>
          </div>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={Python} alt='Python icon' />
            <p className='text-xs sm:text-sm'>Python</p>
          </div>
          <div className='shadow-md shadow-[#10C623] hover:scale-105 duration-300'>
            <img className='w-16 sm:w-20 mx-auto py-4' src={MySQL} alt='MySQL icon' />
            <p className='text-xs sm:text-sm'>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
