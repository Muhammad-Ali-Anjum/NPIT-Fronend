"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

import img1 from "../../public/img.jpeg";
import img2 from "../../public/img2.jpeg";
import img3 from "../../public/img.jpeg";

export default function HeroCarousel({
  images = [img1, img2, img3],
  autoPlay = true,
  interval = 3000,
  showIndicators = true,
  showArrows = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(null);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, images.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, images.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentIndex]);

  useEffect(() => {
    if (!autoPlay || images.length < 2) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext, images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden shadow-2xl group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Height: mobile par thoda kam, bade screens par responsive */}
      <div className="relative h-56 min-h-50 max-h-125 sm:h-64 sm:max-h-150 md:h-80 md:max-h-175 lg:h-96 lg:max-h-200 xl:h-125 xl:max-h-225 2xl:max-h-250 w-full">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let translateX = "0";
          if (!isActive) {
            if (isPrev) translateX = "-100%";
            else if (isNext) translateX = "100%";
            else translateX = index < currentIndex ? "-100%" : "100%";
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                isActive ? "z-10" : "z-0"
              }`}
              style={{
                transform: `translateX(${translateX}) scale(${
                  isActive ? 1 : 0.95  // mobile par side slides ka scale thoda kam distortion ke liye
                })`,
                opacity: isActive ? 1 : 0.7,  // side slides ko thoda transparent rakha
                filter: isActive ? "none" : "blur(1px)",  // blur bhi kam kar diya
              }}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>

      {showIndicators && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2.5 sm:w-10 sm:h-3 bg-white"
                  : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/80"
              } rounded-full`}  // rounded-full se better touch target
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 
                       opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100" // mobile par hamesha visible
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 
                       opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}
    </div>
  );
}

HeroCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  showIndicators: PropTypes.bool,
  showArrows: PropTypes.bool,
};