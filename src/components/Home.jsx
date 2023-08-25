import React from 'react';
import CV from '../assets/Cole Hanekom CV.pdf';
import Logo from '../assets/ch-logo.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-[#111111] flex flex-col justify-center items-center">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Content Section */}
          <div className="md:order-1 text-center md:text-left">
            <p className="text-2xl text-white">
              <span className="text-[#10C623]">Hello</span>, I Am
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cole <span className="text-[#10C623]">Hanekom</span>
            </h1>
            <div className="mt-4 md:mt-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
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
          <div className="md:order-2 text-center">
            <img src={Logo} alt="Logo" className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
