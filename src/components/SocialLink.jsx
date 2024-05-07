import React from 'react';
import { FaGithub, FaLinkedin, FaUserTie, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/amit-sahu-39387a262",
            style: 'bg-blue-500'
        },
        {
            id: 2, 
            child: ( <> GitHUb <FaGithub size={30}/> </> ), 
            href: "https://github.com/sahuami", 
            style: 'bg-black'
        },
        {
            id: 3,
            child: (
                <>
                Twitter <FaTwitter size={30}/>
                </>
            ),
            href: "https://twitter.com/sahuami2000",
            style: 'bg-black'
        },
        {
            id: 4,
            child: (
                <>
                Resume <FaUserTie size={30}/>
                </>
            ),
            href: "/src/assets/AmitResume.pdf",
            style: 'bg-black ',
    
            

        },
        {
            id: 5,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:sahuami2000@gmail.com",
            style: 'bg-blue-800'
        },
        
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({id,child, href, style})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                target='_blank'>
                {child}
                </a>
            </li>
            ))};
        </ul>
    </div>
  )
}

export default SocialLink