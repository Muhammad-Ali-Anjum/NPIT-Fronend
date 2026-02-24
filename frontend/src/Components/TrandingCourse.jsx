import React from 'react'
import Card from './Card'
function TrandingCourse() {
  return (
    <>
    
       <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-center gap-6">
          <div className="flex-1 h-0.75 bg-black" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-black whitespace-nowrap">
            TRENDING COURSE
          </h2>

          <div className="flex-1 h-0.75 bg-black" />
        </div>
        <p className="text-center mt-6 text-gray-700 text-sm sm:text-base md:text-lg tracking-wide">
          EXPLORE THE MOST IN DEMAND COURSES SHAPING THE FUTURE.
        </p>
      </div>
    </section>
   
       </>
  )
}

export default TrandingCourse