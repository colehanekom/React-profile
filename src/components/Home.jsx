import React from 'react';
import CV from '../assets/Cole Hanekom CV.pdf';
import Logo from '../assets/ch-logo-removebg.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-[#111111] flex flex-col justify-center items-center">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          {/* Content Section */}
          <div className="md:order-1 text-center md:text-left">
            <p className="text-2xl md:text-4xl text-white">
              <span className="text-[#10C623]">Hello</span>, I Am
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white">
              Cole <span className="text-[#10C623]">Hanekom</span>
            </h1>
            <div className="mt-4 md:mt-8">
              <h2 className="text-xl md:text-4xl font-semibold text-white">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Web Developer',
                    2000,
                    'Software Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', paddingLeft: '5px' }}
                  repeat={Infinity}
                  className="type-animation"
                />
              </h2>
            </div>
            <div className="mt-6 md:mt-12 text-center md:text-left">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="inline-block md:block">
                <button className="text-white border-2  bg-[#10C623] px-4 py-2 rounded-md flex items-center hover:scale-105">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500" 
              className="md:order-2">
            <img src={Logo} alt="Logo" className="w-max" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
