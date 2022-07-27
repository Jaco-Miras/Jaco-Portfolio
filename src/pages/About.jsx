import React from "react";
import Dots from "../assets/images/dots.png";
import Jaco from "../assets/images/Jako.jpg";

function About() {
  return (
    <div name="about" className="px-10">
      <div className="container mx-auto py-20  flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* Left */}
        <div className="relative">
          <img
            className=" h-1/4 absolute top-0 left-0 -z-10"
            src={Dots}
            alt="dots"
          />
          <div className="h-full rounded-full overflow-hidden ">
            <img className="h-96" src={Jaco} alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <p className="text-gray-400">
            I built personal projects like clones, etc. I'm also a enthusiast
            frontend developer
          </p>

          <div>
            <h1 className="text-gray-500 font-light italic">Proficient in</h1>
            <h2 className="text-gray-400 font-medium">HTML</h2>
            <h2 className="text-gray-400 font-medium">CSS</h2>
            <h2 className="text-gray-400 font-medium">Javascript</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
