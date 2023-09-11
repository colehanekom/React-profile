import React from 'react';
import School from '../assets/school.png';
import Restaurant from '../assets/restaurant.png';
import Starbucks from '../assets/starbucks.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#111111] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 pt-24 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-3xl md:text-4xl lg:text-7xl font-bold'>
            Latest <span className='text-[#10C623]'>Projects</span>
          </p>
        </div>

        {/* Grid item */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <div
            style={{ backgroundImage: `url(${School})` }}
            className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-3 content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl md:text-2xl font-bold tracking-wider'>
                Primary School Website
              </span>
              <div className='pt-4 md:pt-8 text-center'>
                <a
                  href='https://dynamic-unicorn-de5d72.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='animate-pulse text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Restaurant})` }}
            className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-3 content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl md:text-2xl font-bold tracking-wider'>
                Restaurant Landing Page
              </span>
              <div className='pt-4 md:pt-8 text-center'>
                <a
                  href='https://dazzling-platypus-52df7c.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='animate-pulse text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Starbucks})` }}
            className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-3 content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl md:text-2xl font-bold tracking-wider'>
                Starbucks Landing Page
              </span>
              <div className='pt-4 md:pt-8 text-center'>
                <a
                  href='https://preeminent-empanada-763889.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='animate-pulse text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
