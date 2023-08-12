import React from 'react'
import GitHub from '../assets/github.png';
import School from '../assets/school.jpg';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#111111] text-white'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold'>Latest <span className='text-[#10C623]'>Projects</span></p>
            </div>
            
            {/*Grid item*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${GitHub})`}} 
                className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/*link to demo or github code*/}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#111111] font-bold text-lg '>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${GitHub})`}} 
                className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#111111] font-bold text-lg '>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${GitHub})`}} 
                className='shadow-lg shadow-[#10C623] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#111111] font-bold text-lg '>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects 