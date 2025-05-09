// import { Mail, MapPin } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-[#edebf9] py-8 md:py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-4 border-b border-gray-300 pb-8 md:pb-20 font-dmSans">
//         {/* Left Section - Logo and Description */}
//         <div className="flex flex-col">
//           <div className="relative w-40 h-20">
//             <Image
//               src="/logo.png"
//               fill
//               sizes="(max-width: 1900px) 100vw"
//               alt="logo"
//               className="object-contain"
//             />
//           </div>
//           <p className="text-gray-700 text-sm max-w-lg">
//             Creative-powered to fuel your growth goals. We build world-class
//             digital products, software, and branding.
//           </p>

//         </div>

//         {/* Right Section - Links */}
//         <div className="grid grid-cols-1 gap-10">
//           {/* Products */}
//           <div className="hidden">
//             <h3 className="font-semibold mb-5 text-gray-900">Products</h3>

//             {/* some time for hidding */}
//             <ul className="space-y-3 text-sm text-gray-700 hidden">
//               <li>
//                 <Link href="#">Unify App</Link>
//               </li>
//               <li>
//                 <Link href="#">Page Builder</Link>
//               </li>
//               <li>
//                 <Link href="#">Templates</Link>
//               </li>
//               <li>
//                 <Link href="#">Pricing</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Address */}

//           <div>
//             <p className="lg:mt-6 font-semibold text-gray-700">
//               Registered Office
//             </p>
//             <p className="mt-2 text-sm text-gray-700 flex items-center">
//               <span><MapPin className="w-5 h-5 text-gray-500 mr-2" /></span>
//               New No 642, Old 29-A, F/P Floor, Zakir Nagar, Okhla, New Delhi -
//               110025
//             </p>

//             <p className="lg:mt-6 mt-4 font-semibold text-gray-700">Corporate Office</p>
//             <p className="mt-2 text-sm text-gray-700 flex items-center">
//               <span><MapPin className="w-5 h-5 text-gray-500 mr-2" /></span>
//               C-101, First Floor, Kundan Niwas, Hari Nagar, Ashram, New
//               Delhi - 110014
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Social Media and Copyright */}
//       <div className="container mx-auto flex flex-col items-center justify-center text-center text-sm text-gray-600 font-dmSans mt-5">
//         <p>
//           Copyright &copy; {new Date().getFullYear()} Technovatic Solutions. All Rights Reserved.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default Footer;


'use client'

import { Github, Linkedin, Mail, Twitter, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from 'next/image'

const Footer = () => {
  const [textColors, setTextColors] = useState([
    'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500', 'text-pink-500'
  ])
  const [imageRotation, setImageRotation] = useState(0)

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColors(prev => [...prev.slice(1), prev[0]])
    }, 2000)

    const rotationInterval = setInterval(() => {
      setImageRotation(prev => (prev + 5) % 360)
    }, 100)

    

    return () => {
      clearInterval(colorInterval)
      clearInterval(rotationInterval)
    }
  }, [])

  

  const socialLinks = [
    { icon: Github, href: "https://github.com/aniruddhaadak80", color: "text-purple-500", hoverBg: "hover:bg-purple-100/10" },
    { icon: Linkedin, href: "https://linkedin.com/in/aniruddha-adak", color: "text-blue-500", hoverBg: "hover:bg-blue-100/10" },
    { icon: Twitter, href: "https://twitter.com/aniruddha_adak", color: "text-sky-500", hoverBg: "hover:bg-sky-100/10" },
    { icon: Mail, href: "mailto:aniruddhaadak80@gmail.com", color: "text-red-500", hoverBg: "hover:bg-red-100/10" },
    { icon: Users, href: "#contributors", color: "text-green-500", hoverBg: "hover:bg-green-100/10" },
  ]

  return (
    <footer className="w-full mt-12 overflow-hidden border-t bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300">
      <div className="container w-11/12 mx-auto px-4 py-8 overflow-hidden">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Profile Section */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-4 relative group w-[100px] h-[100px] overflow-hidden">
              <Image
                src="/images/businessdev/AmitPhoto.png"
                alt="Aniruddha Adak"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover border-4 border-primary shadow-lg transition-all duration-300"
                style={{ transform: `rotate(${imageRotation}deg)` }}
              />
            </div>

            {[
              `© ${new Date().getFullYear()}. All rights reserved.`,
              "Created by ANIRUDDHA ADAK",
              "Phone: +917029155691",
              "Email: aniruddhaadak80@gmail.com"
            ].map((text, index) => (
              <p
                key={index}
                className={`mt-1 text-sm font-medium ${textColors[index % textColors.length]}  hover:scale-105 transform`}
              >
                {text.startsWith('Phone:') ? (
                  <>Phone: <a href="tel:+917029155691" className="hover:underline hover:text-primary">+918700851891</a></>
                ) : text.startsWith('Email:') ? (
                  <>Email: <a href="mailto:aniruddhaadak80@gmail.com" className="hover:underline hover:text-primary">sahuami2000@gmail.com</a></>
                ) : text}
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4 flex-wrap justify-center">
              {socialLinks.map(({ icon: Icon, href, color, hoverBg }, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className={`group transition-all duration-300 transform hover:scale-105 ${color} ${hoverBg}`}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" className="relative">
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping bg-current"></span>
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-current blur-sm"></span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
