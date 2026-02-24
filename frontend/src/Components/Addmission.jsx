import React from 'react';
import TrandingCourse from './TrandingCourse';

function Addmission() {
  return (
    <>
    <section className="w-full bg-white min-h-fit flex flex-col items-center px-4  md:py-16 ">
      
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
          ADMISSIONS
        </h1>
        <h2 className="text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold mb-6">
          Applications Are Open For Fall 2026
        </h2>
      </div>

 
      <div className="w-full max-w-3xl px-2 md:px-6">
        <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam suscipit cumque provident
          reprehenderit doloribus nisi sit odio rerum magni voluptatum voluptates facilis incidunt ipsa, fugit eos perferendis excepturi molestias quos! 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam non esse rerum officiis cumque neque eaque velit, consectetur expedita odio nihil id recusandae perspiciatis maxime suscipit laborum ullam sint quis. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae corrupti et vitae sint, voluptate ducimus ipsam aspernatur deserunt veritatis beatae architecto sunt assumenda numquam, maiores quidem ad deleniti dicta!
        </p>

    
        <div className="flex justify-center mt-8">
          <button className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white text-lg md:text-2xl font-semibold rounded-md py-3 px-6">
            Apply Now
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Addmission;