
import React from "react";
import dsa from '../assets/dsa.png'
import java from '../assets/java.png'
import firebase from '../assets/Firebase.svg'
import oop from '../assets/oops.jpg'
import html from '../assets/html.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import js from '../assets/javascript.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import react from '../assets/react-svgrepo-com.svg';
import tailwind from '../assets/tailwind.svg';
import { IoLogoFirebase } from "react-icons/io5";


function Skills() {
  const tech = [
    {
      id: 1,
      src: java,
      title: 'java',
      style: 'shadow-blue-400'
    },
    {
      id: 2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 3,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-400'
    },
    {
      id: 4,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-400'
    },
    {
      id: 5,
      src: react,
      title: 'React',
      style: 'shadow-blue-400'
    },
    {
      id: 6,
      src: git,
      title: 'Git',
      style: 'shadow-orange-500'
    },
    {
      id: 7,
      src: github,
      title: 'Github',
      style: 'shadow-black'
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-cyan-500'
    },
    {
      id: 9,
      src: dsa,
      title: 'DSA',
      style: 'shadow-cyan-500'
    },
    {
      id: 10,
      src: oop,
      title: 'OPPs Concept',
      style: 'shadow-white'
    },
    {
      id: 11,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-500'
    },
  ]

  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-xl  container mx-auto px-4 md:px-20  mt-20 mb-10"
      >
        <div>
          <h1 className="text-5xl font-bold mt-5 text-white hover:scale-95 duration-300 underline">Skills</h1>
          <p className=" text-xl mt-4 font-bold">
            I have experience and practice in below technologies.
          </p>

          <div className='box-cont w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center my-16 px-12 sm:px-0 z-10'>
            {tech.map(({ id, src, style, title }) => (
              <div key={id} className={`box shadow-md hover:scale-105 duration-500  h-[120%] justify-center flex flex-col bg-gray-800 bg-opacity-90 py-2 rounded-lg z-10 ${style}`}>
                <img className='h-20 w-20 mx-auto' src={src} alt="" />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Skills;



