import Image from "next/image";
import icon from "../../Image/icon.png";
import TrandingCourse from "./TrandingCourse";
export default function MetricCardsSection() {

  const cards = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <>
      <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
            
              <div className="bg-blue-900 p-5 flex justify-center">
                <Image
                  src={icon}
                  alt="Metric Tech"
                  width={200}
                  height={300}
                  className="w-full h-44 object-contain rounded-lg"
                />
              </div>

          
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800">METRIC TECH</h2>

                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Ha Ha Ha Ha Ha.
                </p>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse,
                  earum, officiis unde temporibus, placeat facere recusandae ipsa quod
                  voluptatibus dolorem officia? Repellendus corrupti reprehenderit labore
                  eaque minima beatae excepturi.
                </p>

                <button className="mt-5 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  View Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}