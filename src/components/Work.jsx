
import React from "react";
import project1 from "../assets/projects/ShopKaro.png";
import project2 from "../assets/projects/liveChat.png";
import project3 from "../assets/projects/ResumeBuilder.png";
import project4 from "../assets/projects/PasswordGenerator.png";
import project5 from "../assets/projects/CurrencyConverter.png";
import project6 from "../assets/projects/Potfolio.png";
import project7 from "../assets/projects/Netflix.jpeg";



function Work() {
  const cardItem = [
    {
      id: 1,
      src: project1,
      demoSrc: "https://dice-roll-game-alpha.vercel.app/",
      codeSrc: "https://github.com/amank0259/diceRollGame",
    },
    {
      id: 2,
      src: project2,
      demoSrc: "https://amank0259.github.io/Netflix-Clone/",
      codeSrc: "https://github.com/amank0259/Netflix-Clone",
    },
    {
      id: 3,
      src: project3,
      demoSrc: "https://amank0259.github.io/Random-joke-Generator/",
      codeSrc: "https://github.com/amank0259/Random-joke-Generator",
    },
    {
      id: 4,
      src: project4,
      demoSrc: "https://amank0259.github.io/Product-Landing-Page/",
      codeSrc: "https://github.com/amank0259/Product-Landing-Page",
    },
    {
      id: 5,
      src: project5,
      demoSrc: "https://amank0259.github.io/gsap-animated-website/",
      codeSrc: "https://www.github.com/gsap-animated-website/",
    },
    {
      id: 6,
      src: project6,
      demoSrc: "https://amit-potfolio.netlify.app",
      codeSrc: "https://github.com/amank0259/amank0259-Aman-kumar-Portfolio-Website",
    },

    {
      id: 7,
      src: project7,
      demoSrc: "https://amank0259.vercel.app",
      codeSrc: "https://github.com/amank0259/amank0259-Aman-kumar-Portfolio-Website",
    }
  ];


  return (

    <>
      <div
        name="Work/Projects"
        className="max-w-screen-xl container mx-auto px-5 md:px-20 mt-20 mb-10"

      >
        <div>
          <h1 className="text-5xl font-bold   text-white underline hover:scale-95 duration-200">Work/Projects</h1>
        
          <p className='py-4 mt-2 text-xl font-bold z-10'>Check out some of my personal projects here :</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-5">
            {cardItem.map(({ id, src, demoSrc, codeSrc }) => (
              <div
                key={id}
                className="md:w-[300px] md:h-[250px] border-[3px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              >
                <a href={demoSrc}><img src={src} alt="" className='rounded-md duration-200 cursor-pointer hover:scale-105' /></a>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-slate-900 rounded-xl text-white border-[1px]'>
                    <a href={demoSrc}>Demo</a>
                  </button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-500 rounded-xl border-[1px]'>
                    <a href={codeSrc}>Code</a>
                  </button>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default Work;


