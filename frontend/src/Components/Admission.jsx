import React from 'react';

const Admission = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-popins">
      <div className="max-w-4xl w-full text-center">
        
        {/* Main Heading */}
        <div className="relative inline-block mb-4">
          <h1 className="text-6xl md:text-8xl font-popins font-bold text-black uppercase">
            Admissions
          </h1>
          {/* Underline */}
          <div className="h-1.5 bg-black w-full mt-1"></div>
        </div>

        {/* Sub-heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-6 mb-8">
          Applications Are Open For Fall 2026
        </h2>

        {/* Paragraph Text */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10 max-w-5xl mx-auto px-4">
          Experience A Dynamic Education Designed To Inspire Innovation, Critical Thinking, And 
          Leadership. Our Programs Combine Rigorous Academics With Practical Experiences, 
          Preparing Students To Make A Meaningful Impact. Scholarships And Financial Aid Make This 
          World-Class Education Accessible To All. Become Part Of A Diverse And Thriving Learning 
          Community Today.
        </p>

        {/* Apply Now Button */}
        <button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white font-bold py-4 px-12 rounded-xl text-xl transition duration-300 shadow-md">
          Apply Now
        </button>
        
      </div>
    </div>
  );
};

export default Admission;