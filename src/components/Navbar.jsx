import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Work/Projects",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto  px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-500 to-gray-300">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-4 ml-5">
            <img src={logo} className="h-12 w-12 rounded-full hover:scale-125 duration-300" alt="" />
            <h1 className=" text-3xl cursor-pointer justify-center text-slate-900 font-semibold hover:scale-105 duration-300 font-sign">
              Amit
            </h1>
          </div>

          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-10 mr-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-150 duration-300 cursor-pointer text-lg text-slate-900 font-semibold"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={700}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen  items-center justify-center space-y-5 text-4xl ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer" 
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={700}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
