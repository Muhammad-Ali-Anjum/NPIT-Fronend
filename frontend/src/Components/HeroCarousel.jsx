"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import img1 from "../../public/img.jpeg";
import img2 from "../../public/img2.jpeg";
import img3 from "../../public/img.jpeg";

const images = [img1, img2, img3];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // autoplay (safe – does not affect initial render)
  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="slide"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}