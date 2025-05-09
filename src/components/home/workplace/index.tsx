"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactSection from "../getstarted/contactus";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WorkPlace = () => {
  const [open, setOpen] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false); // New state for tracking animation
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // Mark as animated
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="relative bg-gradient-to-b from-white to-[#e6e8fa] ">
      <div className="container relative w-full h-[380px] md:h-[380px] lg:h-[600px] overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/home/tech-bg-005.webp')] bg-cover bg-center"></div>

        {/* Content Section with Motion */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center font-dmSans p-4 md:p-8 z-10 mb-9"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }} // Use hasAnimated state
          transition={{ duration: 0.6, delay: 0.6 }}
          ref={ref}
        >
          <div className="space-y-4 md:space-y-16">
            <motion.h2
              className="text-[28px] md:text-[30px] lg:text-[42px] font-bold text-[#2D3958] max-w-xl md:max-w-4xl lg:max-w-4xl leading-tight "
              ref={ref}
              initial={{ opacity: 0, y: 70 }}
              animate={{
                opacity: hasAnimated ? 1 : 0,
                y: hasAnimated ? 0 : 50,
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Creating a groundbreaking product requires domain experts
            </motion.h2>
            <motion.div
              className="text-sm md:text-base lg:text-lg text-[#7B88A8] max-w-xl md:max-w-2xl lg:max-w-4xl"
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: hasAnimated ? 1 : 0,
                y: hasAnimated ? 0 : 50,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We create artistically designed, meticulously developed, and
              optimized websites, web applications, and mobile apps. Our focus
              is on delivering a unique and high-quality experience that
              enhances engagement and satisfaction for all users and
              stakeholders.
            </motion.div>

            <div className="flex justify-center mt-6">
              {" "}
              {/* Flex container to center the button */}
              <Sheet>
                <SheetTrigger className="md:block hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button className="md:text-lg bg-blue-500 text-white px-7 py-6 md:px-8 md:py-7 rounded hover:text-blue-600 hover:bg-white">
                      Get Started
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent className="p-0 overflow-auto sm:rounded-none">
                  <ContactSection />
                </SheetContent>
              </Sheet>
            </div>

            {/* MOBILE VIEWS */}
            <div className="md:hidden block">
              <Drawer>
                <DrawerTrigger>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button className="md:text-lg bg-blue-500 text-white px-7 py-6 md:px-8 md:py-7 rounded hover:text-blue-600 hover:bg-white">
                      Get Started
                    </Button>
                  </motion.div>
                </DrawerTrigger>
                <DrawerContent>
                  <ContactSection />
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPlace;
