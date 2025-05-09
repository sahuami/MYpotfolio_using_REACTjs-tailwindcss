import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import WorkExperience from "@/components/home/work-experience";
import SocialLink from "@/components/home/socialLink";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";


const page = () => {
  return (
    <div>
      <Header />
      <SocialLink />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />

      {/* <PlanSection/> */}
      {/* <WorkPlace/> */}
      {/* <NewsSection/> */}
      <Footer />
    </div>
  );
};

export default page;
