export default function TechVisionHero() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      
      {/* Heading - Fully Responsive Text Sizes */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#282460] leading-tight">
          Where Tomorrow’s Tech Visionaries <br className="hidden md:block" />
          Begin Their Journey
        </h1>
      </div>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative pt-0 md:pt-10 pb-6 md:border-t-4 md:border-black">
          
          {/* Left Gradient Line - Visible only on md and above */}
          <div className="hidden md:block absolute left-0 top-0 w-1 h-full bg-linear-to-b from-black via-gray-500 to-transparent"></div>
          
          {/* Right Gradient Line - Visible only on md and above */}
          <div className="hidden md:block absolute right-0 top-0 w-1 h-full bg-linear-to-b from-black via-gray-500 to-transparent"></div>

          {/* Paragraph Text - Responsive Padding & Alignment */}
          <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2 md:px-12">
            Start your educational journey at Next Planner Institute of Technology, where
            cutting-edge technology and applied sciences meet world-class guidance. Under
            the mentorship of expert faculty, we empower students to become critical thinkers,
            problem solvers, and successful professionals ready to make a positive impact on
            society. Explore our unique programs today and start building your future!
          </p>
        </div>
      </div>

    </section>
  );
}