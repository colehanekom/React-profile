import React from 'react';
import Image from '../assets/aboutimg.jpg';

const About = () => {
  return (
    <div name='about' className='w-full bg-[#111111] text-white'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

            {/* Text */}
            <div className='sm:pb-4 pr-4 flex items-center flex-col'>
              <p className='text-4xl md:text-4xl lg:text-7xl font-bold mb-2 '>
                About <span className='text-[#10C623]'>Me</span>
              </p>
               <p className='text-sm sm:text-base md:text-lg'>
                As a proud graduate from CPUT (Cape Peninsula University of Technology), I am a passionate and versatile
                coder proficient in multiple programming languages. With a solid foundation in <span className='text-[#10C623]'>Java, Python, HTML, CSS, and
                JavaScript</span>, I bring a diverse skill set to the table. My love for coding stems from its <span className='text-[#10C623]'>limitless
                possibilities</span> and the ability to bring ideas to life through technology. Throughout my academic journey, I
                have tackled various projects, <span className='text-[#10C623]'>honing my problem-solving skills</span> and developing a keen eye for detail. I
                thrive in dynamic environments, always <span className='text-[#10C623]'>eager to learn </span>and adapt to new technologies and industry trends.
                With a dedication to clean and efficient code, I am committed to delivering high-quality solutions that
                exceed expectations. I am excited about the ever-evolving world of technology and <span className='text-[#10C623]'>eager to contribute </span>my
                skills and passion to exciting projects.
              </p>
            </div>

              {/* Image*/}
            <div data-aos="zoom-in" className='flex justify-center items-center'>
              <img src={Image} alt='Image' className=' md:w-screen shadow-lg shadow-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
