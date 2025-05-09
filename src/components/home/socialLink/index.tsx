'use client';

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaUserTie, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";


const SocialLink = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/amit-sahu-39387a262",
      style: 'bg-blue-500 '
    },
    {
      id: 2,
      child: (<> GitHUb <FaGithub size={30} /> </>),
      href: "https://github.com/sahuami",
      style: 'bg-gray-700'
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/sahuami2000",
      style: 'bg-gray-600'
    },

    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sahuami2000@gmail.com",
      style: 'bg-blue-800'
    },
  ]

  return (


    <div className="container w-auto hidden md:flex flex-col top-[35%] left-0 fixed fade-in-up z-50">
      <motion.ul
        className=""
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-10 my-[2px] rounded-3xl px-4 ml-[-140px] hover:rounded-md hover:ml-[-40px] duration-300" +
              " " +
              style
            }
          >
            <Link
              href={href}
              className="flex justify-between items-center w-full text-white hover:text-white"
              target="_blank"
            >
              {child}
            </Link>
          </li>
        ))}
      </motion.ul>

    </div>
  )
}

export default SocialLink