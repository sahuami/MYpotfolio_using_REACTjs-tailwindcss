'use client';
import { useState } from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const SecondNav = () => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  return (
    <div className="container flex justify-between items-center py-2 md:py-4  text-white">
      <div className="flex items-center space-x-4">
        <div className="relative w-40 h-20">
          {" "}
          <Image
            src="/logo-header.png"
            fill
            sizes="(max-width: 1900px) 100vw"
            alt="logo"
            className="object-contain"
          />
        </div>
      </div>


      {/* some time for hidde this  */}


      <div className="  ">
        <div className="flex items-center space-x-8 font-bold text-[16px] font-dmSans ">
          {/* Home Dropdown */}
          <DropdownMenu
            open={homeDropdownOpen}
            onOpenChange={(open) => setHomeDropdownOpen(open)}
          >
            <DropdownMenuTrigger
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link
                href="/"
                className="flex items-center space-x-4 text-white hover:text-blue-500"
              >
                <span>Home</span>
                <ChevronDown size={16} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`dropdown-menu-content ${homeDropdownOpen ? "show" : ""
                } p-4 space-y-2`}
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/home/overview"
                  className="flex items-center space-x-4 text-lg font-dmSans "
                >
                  <span className="hover:text-blue-400">Main</span>
                  <button className="flex text-[#ff7046] bg-[#fff0ec] px-5  rounded-full">
                    HOT
                  </button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/home/agency-style"
                  className="flex items-center space-x-4 text-lg"
                >
                  <span className="hover:text-blue-400">Agency Style</span>
                  <button className="flex text-[#9bda95] bg-[#e6f7f1] px-5 rounded-full">
                    NEW
                  </button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home/agency-style" className="text-lg">
                  <span className="hover:text-blue-400">
                    Business Style
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home/agency-style" className="text-lg ">
                  <span className="hover:text-blue-400">Saas Style</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home/agency-style" className="text-lg">
                  <span className="hover:text-blue-400">
                    Techonology Style
                  </span>
                </Link>
              </DropdownMenuItem>
              {/* Add more items if needed */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Us Link */}
          <Link href="/about" className="text-white hover:text-blue-500">
            About Us
          </Link>

          {/* Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Link
                href="#"
                className="flex items-center space-x-2 text-white hover:text-blue-500"
              >
                <span>Pages</span>
                <ChevronDown size={16} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 space-y-2 font-dmSans">
              <DropdownMenuItem asChild>
                <Link href="/pages/page1">
                  <span className=" hover:text-blue-500">Services</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Pricing</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Support</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Careers</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Shop</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Cart</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/page2">
                  <span className=" hover:text-blue-500">Checkout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Features Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link
                href="#"
                className="flex items-center space-x-2 text-white hover:text-blue-500"
              >
                <span>Features</span>
                <ChevronDown size={16} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/features/feature1">Feature 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/features/feature2">Feature 2</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Blog Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link
                href="#"
                className="flex items-center space-x-2 text-white hover:text-blue-500"
              >
                <span>Blog</span>
                <ChevronDown size={16} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/blog/article1">Article 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog/article2">Article 2</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Link */}
          <Link href="/contact" className="text-white hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
