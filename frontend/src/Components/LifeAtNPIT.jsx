import React from "react";
import Link from "next/link";

function LifeAtNPIT() {
  return (
    <>
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-black font-poppins text-center">
            LIFE AT NPIT
          </h1>

          <br />

          {/* Description Text */}
          <div className="flex justify-center">
            <p className="text-gray-700 text-2xl text-justify w-[80%]">
              Life at NPIT is a perfect combination of Skill Enhancement, Academic Exposure, and Student Life & Activities, creating a well-rounded learning experience for students. We focus on developing strong technical and practical skills through hands-on training, modern labs, and project-based learning that prepare students for real-world challenges.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <p className="text-gray-700 text-2xl text-justify w-[80%]">
              Through academic exposure such as seminars, workshops, industry visits, and professional interactions, students gain insight into the latest technologies and market trends. Alongside academics, vibrant student life activities, competitions, and events help build confidence, leadership, teamwork, and creativity — ensuring students grow not only as IT professionals but also as responsible and confident individuals.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">

            {/* Card 1 */}
            <div className="w-65 h-50 bg-white rounded-xl border border-gray-300 flex flex-col items-center justify-center text-center">
              <h2 className="text-black text-lg font-semibold tracking-wide">
                SKILL
              </h2>
              <h2 className="text-black text-lg font-semibold tracking-wide">
                ENHANCEMENT
              </h2>
              <Link
                href="/skills"
                className="mt-6 text-black underline text-base"
              >
                view all
              </Link>
            </div>

            {/* Card 2 */}
            <div className="w-65 h-50 bg-white rounded-xl border border-gray-300 flex flex-col items-center justify-center text-center">
              <h2 className="text-black text-lg font-semibold tracking-wide">
                ACADEMIC
              </h2>
              <h2 className="text-black text-lg font-semibold tracking-wide">
                ENHANCEMENT
              </h2>
              <Link
                href="/academic"
                className="mt-6 text-black underline text-base"
              >
                view all
              </Link>
            </div>

            {/* Card 3 */}
            <div className="w-65 h-50 bg-white rounded-xl border border-gray-300 flex flex-col items-center justify-center text-center">
              <h2 className="text-black text-lg font-semibold tracking-wide">
                STUDENT LIFE
              </h2>
              <h2 className="text-black text-lg font-semibold tracking-wide">
                & ACTIVITIES
              </h2>
              <Link
                href="/student-life"
                className="mt-6 text-black underline text-base"
              >
                view all
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default LifeAtNPIT;