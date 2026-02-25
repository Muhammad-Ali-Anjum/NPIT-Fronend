import React from 'react'

function Faq() {
  return (
    <>
        <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-widest flex justify-center items-center gap-2">
                       ❓ FAQ
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto mb-3 mt-4"></div>

             <p className="text-gray-600 text-lg">
                 Find Answers To Common Queries
             </p>
                </div>

                 <div className="space-y-6 bg-gray-300 rounded h-24">
                  <p className="h-32">
                     <span className="font-bold">What is the application deadline?</span> <br />
                       
                      <span className="font-semibold">Application deadlines vary by program. For fall semester, the priority deadline is March 1st, and the regular deadline is May 1st. Spring semester applications are due by November 1st. We recommend applying early for the best consideration. </span><br />
                    <p className="bg-gray-300 mt-12 rounded">
                      <span className="font-bold"> Are online programs available?</span><br />
      
                      <span className="font-semibold">Yes, we offer fully online programs and hybrid options across various disciplines. Our online programs maintain the same academic rigor as on-campus courses and provide flexible learning opportunities for working professionals.</span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">
                       <span className="font-bold">What support services are available to students?</span><br />
                        <span className="font-semibold"> We provide comprehensive support services including academic advising, career counseling, tutoring services, mental health resources, library access, technology support, and student organizations. All services are available to both on-campus and online students. </span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">   
                     <span className="font-bold">Can I transfer credits from another institution? </span><br />
                     <span className="font-semibold">Yes, we accept transfer credits from accredited institutions. Submit your official transcripts for evaluation, and our admissions team will determine which credits can be transferred. Generally, we accept up to 60 credits for undergraduate programs.</span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">   
                     <span className="font-bold">What are the admission requirements?</span><br />
                    <span className="font-semibold">Our admission requirements include a completed application form, high school transcripts with a minimum GPA of 3.0, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement. Some programs may have additional requirements.</span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">   
                   <span className="font-bold">How do I apply for financial aid?</span><br />
                    <span className="font-semibold">To apply for financial aid, complete the FAFSA form and submit it along with your admission application. Our financial aid office will review your application and inform you of available scholarships, grants, and loan options within 2–3 weeks.</span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">   
                    <span className="font-bold mt-12 rounded">What is the class size?</span><br />
                    <span className="font-semibold">Our average class size is 20–25 students for undergraduate courses and 12–15 students for graduate programs. This ensures personalized attention from faculty and promotes interactive learning environments.</span>
                    </p>
                    <p className="bg-gray-300 mt-12 rounded">   
                   <span className="font-bold mt-12 rounded">  Are internship opportunities available?</span><br />
      
                   <span className="font-semibold">yes, we have partnerships with leading companies and organizations that provide internship and co-op opportunities. Our career services office helps students find relevant internships aligned with their field of study and career goals.</span>
                  </p>
                  </p>
                </div> 
             </div> 
        </section>
    </>
  )
}

export default Faq