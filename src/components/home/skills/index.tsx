


"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const companyLogos = [
  {
    src: "/images/skills/html.svg",
    alt: 'HTML',
    style: 'shadow-orange-500'
  },
  {
    src: "/images/skills/css-3-svgrepo-com.svg",
    alt: 'CSS',
    style: 'shadow-blue-400'
  },
  {
    src: "/images/skills/tailwind.svg",
    alt: 'Tailwind CSS',
    style: 'shadow-cyan-500'
  },
  {
    src: "/images/skills/bootstrap.svg",
    alt: 'Bootstrap',
    style: 'shadow-cyan-500'
  },
  {
    src: "/images/skills/javascript.svg",
    alt: 'JavaScript',
    style: 'shadow-yellow-400'
  },
  {
    src: "/images/skills/react-svgrepo-com.svg",
    alt: 'React',
    style: 'shadow-blue-400'
  },
  {
    src: "/images/skills/nextjs.svg",
    alt: 'Next js ',
    style: 'shadow-black'
  },
  {
    src: "/images/skills/git.svg",
    alt: 'Git',
    style: 'shadow-orange-500'
  },
  {
    src: "/images/skills/github.svg",
    alt: 'Github',
    style: 'shadow-black'
  },
  {
    src: "/images/skills/java.png",
    alt: 'java',
    style: 'shadow-yellow-500'
  },
  {
    src: "/images/skills/dsa.png",
    alt: 'DSA',
    style: 'shadow-blue-400'
  },
  {
    src: "/images/skills/oops.jpg",
    alt: 'OPPs Concept',
    style: 'shadow-cyan-500'
  },
  {
    src: "/images/skills/postman.svg",
    alt: 'Postman',
    style: 'shadow-cyan-500'
  }
];

const Skills = () => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="container pt-10 ">
      <div className="container flex flex-col items-center justify-center text-center font-dmSans md:max-w-4xl mb-6 md:mb-14">
        <h2 className="text-4xl font-bold mb-4  text-[#2D3958]">
          SKILLS
        </h2>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="float-end mt-4 px-6 py-2 text-sm font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {isGridView ? "Switch to Slider View" : "Switch to Grid View"}
        </button>
      </div>

      {!isGridView ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={2000}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
            1536: { slidesPerView: 7 },
          }}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className={`hover:scale-110 transition-all ease-in-out duration-500 h-[120%] justify-center flex relative mx-1 bg-opacity-90 py-2 rounded-lg z-10 ${logo.style}`}
            >
              <div className="w-full md:h-40 h-32 flex justify-center items-center p-6 md:p-11 relative group">
                <div className="relative w-full h-full">
                  <Image
                    quality={100}
                    src={logo.src}
                    fill
                    sizes="(max-width: 1900px) 100vw"
                    alt={logo.alt}
                    className="object-contain"
                  />
                </div>

                {/* Tooltip outside image container */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-full mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md
    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none z-20 whitespace-nowrap shadow-xl ">
                  {logo.alt}
                </div>
              </div>


              {index !== companyLogos.length && (
                <div className="absolute right-0 top-0 h-full w-[1.5px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              )}
            </SwiperSlide>

          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className={`hover:scale-105 transition-all ease-in-out duration-500 justify-center flex flex-col items-center p-4 rounded-lg shadow-md ${logo.style}`}
            >
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src={logo.src}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  alt={logo.alt}
                  className="object-contain"
                />
              </div>
              <span className="text-sm  font-semibold text-center text-[#2D3958] ">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
