


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from "next/image"




const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const About = () => {

  const [showBio, setShowBio] = useState(false)

  return (
    <section id="about" className=" my-16 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">

      {/* summary section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container w-10/12 my-12  flex flex-col items-center justify-center text-center font-bold font-dmSans px-4"
      >
        <h2 className="text-4xl font-bold mb-4  text-[#2D3958] ">ABOUT ME</h2>
        <AnimatePresence mode="wait">
          {showBio ? (
            <motion.p
              key="full-bio"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground text-justify "
            >
              Hello, I&apos;m Amit sahu, a passionate Web Developer, specializing in Front-End development, and boast proficiency in java with DSA, OOPs concept, HTML, CSS, JavaScript, React.js and Node.js Currently a B.Tech final year Computer Science and Engineering student. I am deeply engaged in the dynamic field of web development. My expertise extends to modern web standards and best practices, allowing me to create robust and user-friendly interfaces.

              As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀 My passion lies in pushing the boundaries of innovation and continuously enhancing my skills. Obsessed with the notion of self-improvement, I am on the lookout for a platform that fosters growth and acceleration in the ever-evolving landscape of #WebDev and #JavaScript.
            </motion.p>
          ) : (
            <motion.p
              key="short-bio"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground"
            >
              Hello, I&apos;m Amit sahu, a passionate Web Developer, specializing in Front-End development...
            </motion.p>
          )}
        </AnimatePresence>
        <Button
          variant="link"
          onClick={() => setShowBio(!showBio)}
          className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
        >
          {showBio ? "Read Less" : "Read More"}
        </Button>
      </motion.div>


      <div className="container w-11/12 px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-[1fr_2fr] items-center"
        >
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/businessdev/AmitPhoto.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full"
              animate={floatingAnimation}
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8 ">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" ml-12 "
            >
              <ul className="space-y-6 ">
                <li className="flex items-start space-x-2 text-[#2D3958]">
                  <div>
                    <h4 className="text-[18px] font-semibold">
                      <span>Bachelor of Technology - Computer Science and Engineering
                      </span>
                    </h4>
                    <p className="text-[16px] md:text-[18px] text-[#7B88A8]">
                      Batch(2020-2024) / J.C. Bose University In Faridabad
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-2 text-[#2D3958]">
                  <div>
                    <h4 className="text-[18px] font-semibold">
                      12th - Passed
                    </h4>
                    <p className="text-[16px] md:text-[18px] text-[#7B88A8]">
                      Year - 2020 / Govt Boys Senior Secondary School No-1, Badarpur
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2 text-[#2D3958]">
                  <div>
                    <h4 className="text-[18px] font-semibold">
                      10th - Passed
                    </h4>
                    <p className="text-[16px] md:text-[18px] text-[#7B88A8]">
                      Year - 2017 / Govt Boys Senior Secondary School No-3, Badarpur
                    </p>
                  </div>
                </li>
              </ul>

            </motion.div>



            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 ml-12"
            >
              <Button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 ">
                <FaDownload className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <FaEnvelope className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                <FaGithub className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                <FaLinkedin className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>
    </section>
  )
}

export default About