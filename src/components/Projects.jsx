import React from 'react';
import School from '../assets/school.png';
import Restaurant from '../assets/restaurant.png';
import Playstation from '../assets/playstation.png';
import UrbanFashion from '../assets/urbanfashion.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:min-h-screen bg-[#111111] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 pr-14 flex flex-col justify-center w-full h-full'>
        <div className='pb-14 text-center'>
          <p className='text-4xl md:text-4xl lg:text-7xl font-bold lg:mb-2 md:pt-16'>
            Latest <span className='text-[#10C623]'>Projects</span>
          </p>
          <p className='pt-4 text-sm sm:text-base md:text-lg lg:text-2xl'>
            Projects that I have worked on or have collaborated with
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
                  <button className='animate-pulse hover:bg-stone-950 hover:text-slate-50 text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
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
                  <button className='animate-pulse hover:bg-stone-950 hover:text-slate-50 text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Playstation})` }}
            className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-3 content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl md:text-2xl font-bold tracking-wider'>
                Playstation Website
              </span>
              <div className='pt-4 md:pt-8 text-center'>
                <a
                  href='https://gorgeous-figolla-302171.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='animate-pulse hover:bg-stone-950 hover:text-slate-50 text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          
          <div
            style={{ backgroundImage: `url(${UrbanFashion})` }}
            className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-3 content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl md:text-2xl font-bold tracking-wider'>
                UrbanFashion Landing Page
              </span>
              <div className='pt-4 md:pt-8 text-center'>
                <a
                  href='https://cerulean-naiad-aa7614.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='animate-pulse hover:bg-stone-950 hover:text-slate-50 text-center rounded-lg px-3 md:px-4 py-2 md:py-3 m-1 md:m-2 bg-white text-[#111111] font-bold text-base md:text-lg'>
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
