import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    src: "../../public/images/1000002742.jpg",
    subtitle: "Subtitle for Image 1",
  },
  {
    src: "../../public/images/PXL_20240618_185627596~2.jpg",
    subtitle: "Subtitle for Image 2",
  },
  {
    src: "../../public/images/PXL_20240618_185605823~2.jpg",
    subtitle: "Subtitle for Image 3",
  }
  // Add more image objects as needed
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlideTimer();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startSlideTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    restartSlideTimer();
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    restartSlideTimer();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    restartSlideTimer();
  };

  const restartSlideTimer = () => {
    clearInterval(intervalRef.current);
    startSlideTimer();
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative mt-[73px] sm:mx-8 md:mx-20 lg:mx-[170px] shadow-2xl slide">
      <div className="overflow-hidden rounded-md lg:h-[650px] ">
        <img
          src={currentImage.src}
          alt={currentImage.subtitle}
          className="w-full h-full bg-contain object-fit"
        />
      </div>
      <div className="absolute bottom-0 w-full rounded bg-[#ffffc5] bg-opacity-50 text-white sm:py-1 md:py-2  py-1 px-6 flex flex-col items-center">
        <h4 className="md:text-2xl text-sm font-bold">
          {currentImage.subtitle}
        </h4>
        <div className="mt-2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-[#fefe38]"
                  : "bg-[#ffffdd] hover:bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          className="bg-[#ffffc5] bg-opacity-50 text-white px-1 py-1 rounded-md hover:bg-opacity-75 sm:px-2 sm:py-2"
          onClick={handlePrevClick}
        >
          &larr;
        </button>
        <button
          className="bg-[#ffffc5] bg-opacity-50 text-white px-1 py-1 rounded-md hover:bg-opacity-75 sm:px-2 sm:py-2"
          onClick={handleNextClick}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
