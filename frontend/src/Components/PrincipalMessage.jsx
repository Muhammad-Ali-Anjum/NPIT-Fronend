import Image from 'next/image';
import PrincipalImage from '../../public/principle.jpeg';
import React from 'react';

const PrincipalMessage = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 bg-white font-popins">
      {/* Main Flex Container: Desktop par row, Mobile par column-reverse takay image pehle dikhe */}
      <div className="flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Content Side */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 tracking-tight uppercase">
            MESSAGE OF THE PRINCIPAL
          </h2>
          
          <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-relaxed text-justify">
            <p>
              Welcome to our institution, where academic excellence and 
              character development go hand in hand. As a newly established 
              college, our mission is to provide quality education in a supportive 
              and inspiring environment. We are committed to nurturing young 
              minds through dedicated faculty, modern teaching methods, and 
              strong moral values.
            </p>
            <p>
              Our goal is not only to prepare students for 
              examinations but to equip them with the skills and confidence 
              needed for future success. I warmly invite students and parents to 
              become part of our growing academic community and experience 
              a journey of learning, growth, and achievement.
            </p>
          </div>

          <div className="mt-10">
            <a 
              href="#" 
              className="text-2xl font-semibold text-black underline underline-offset-12 decoration-2 hover:text-gray-600 transition-all"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right Side: Image + Name (Centered below image) */}
        <div className="flex flex-col items-center shrink-0 w-full md:w-112.5 order-1 md:order-2">
          <div className="w-full relative shadow-2xl rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={PrincipalImage} 
              alt="Principal Image" 
              width={450} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Name Section - Exactly under the image */}
          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-black tracking-wide">
            Gulum Rasool Malik
          </h3>
        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;