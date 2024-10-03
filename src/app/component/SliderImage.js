"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../../public/slider/1.jpg";
import image2 from "../../../public/slider/2.jpg";
import image3 from "../../..//public/slider/3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data

// Image data array
const images= [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

export default function ImageSlider(){
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to show the previous slide
  const prevSlide = ()=> {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = ()=> {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = ()=> {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = ()=> {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative h-[460px] mx-12 group hover:-translate-y-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}