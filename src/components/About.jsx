import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-5xl font-bold mb-5 underline hover:scale-95 duration-300 text-white">About</h1>
          <p className="text-slate-900 text-xl text-justify">
            Hello, I'm Amit sahu, a passionate Web Developer, specializing in Front-End development, and boast proficiency in java with DSA, OOPs concept, HTML, CSS, JavaScript, React.js and Node.js Currently a B.Tech final year Computer Science and Engineering student.
            I am deeply engaged in the dynamic field of web development. My expertise extends to modern web standards and best practices, allowing me to create robust and user-friendly interfaces.
          </p>
          <p className='text-xl text-justify text-slate-900 '>As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀
            My passion lies in pushing the boundaries of innovation and continuously enhancing my skills. Obsessed with the notion of self-improvement, I am on the lookout for a platform that fosters growth and acceleration in the ever-evolving landscape of #WebDev and #JavaScript.</p>
          <br />

          <div>
            <h1 className="text-black font-bold text-3xl underline ">
              Education
            </h1>
            <div className="mt-6">
              <h2 className='text-2xl font-bold block'>Bachelor of Technology - Computer Science and Engineering</h2>
              <p className='text-xl font-semibold text-gray-400 block mt-2'>2020-2024 / J.C. Bose University In Faridabad</p>
            </div>
            <div className='mt-8'>
              <h2 className='text-2xl font-bold block'>12th - Passed</h2>
              <p className='text-xl font-semibold text-gray-400 block mt-2'>Year - 2020 / Govt Boys Senior Secondary School No-1, Badarpur</p>
            </div>
            <div className='mt-8 '>

              <h2 className='text-2xl font-bold block'>10th - Passed</h2>
              <p className='text-xl font-semibold text-gray-400 block mt-2'>Year - 2017 / Govt Boys Senior Secondary School No-3, Badarpur</p>
            </div>

          </div>

        </div>

      </div>
      <hr />
    </>








  );
}

export default About;
