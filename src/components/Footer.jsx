import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Footer() {

  const emailAddress = 'sahuami2000@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  }
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
        
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
