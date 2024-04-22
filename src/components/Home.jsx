import React from "react";

import pic from "../assets/amitphoto.jpeg";
import cv from "../assets/AmitResume.pdf";


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";



import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import { MdArrowOutward } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";



function Home() {

  const emailAddress = 'sahuami2000@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  }

  const handleCvDownload = () => {
    const pdfPath = cv;
    window.open(pdfPath, '_blank');
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
            <span className="text-2xl">Welcome to My Profile</span>
            <h1 className="flex space-x-1 text-2xl md:text-3xl">Hi, My Name is <span className="font-bold ml-3 font-signature text-4xl">Amit sahu</span></h1>
            <h1 className="flex space-x-1 font-serif text-2xl md:text-3xl ">and</h1>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1> I'm a</h1>
              <ReactTyped
                className="text-red-950 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            
            <br />
            <p className=" md:text-md text-justify text-black text-lg">
            I'm an Experienced Web Developer with a strong focus on Front-End development. Proficiency in HTML, CSS, JavaScript, React js, Tailwind css,  JAVA with DSA and OOPs concept a deep understanding of modern web standards and best practices..
            As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀

            </p>
            <br/>
            <div className='flex gap-6'>
            <button onClick={handleEmailClick} className='btn group hover:scale-105 duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-slate-900 cursor-pointer z-10'>
              HIRE ME <span className='ml-2 group-hover:translate-x-1 group-hover:translate-y-[-0.25rem] duration-500 z-10'><MdArrowOutward />
              </span>
            </button>
            <a href={cv} className='z-10' download="AmitResume.pdf">
              <button onClick={handleCvDownload} className='btn group hover:scale-105 duration-300  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-800 to-cyan-900 cursor-pointer z-10'>
                RESUME <span className='ml-2 group-hover:translate-y-1 duration-500 z-10'><FaFileDownload /> </span>
              </button>
            </a>
          </div>
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
              <div className="  space-y-2  mt-5 ">
                <h1 className="font-bold text-center text-xl ">Available on</h1>
                <ul className="flex space-x-6 ">
                  <li>
                    <a href="https://github.com/sahuami" target="_blank">
                      <FaGithub  className="text-2xl cursor-pointer hover:scale-150 duration-300  " />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/amit-sahu-39387a262" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/sahuami2000" target="_blank">
                      <FaSquareXTwitter  className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a  onClick={handleEmailClick} target="_blank">
                      <IoIosMail className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] mt-8 hover:scale-105 duration-300  "
              alt="my photo"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
