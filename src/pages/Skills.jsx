import React from "react";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JAVASCRIPT from "../assets/images/javascript.png";
import BOOTSTRAP from "../assets/images/Boostrap.png";
import TAILWIND from "../assets/images/tailwind.png";
import REACT from "../assets/images/react.png";
import NODE from "../assets/images/node.png";
import MUI from "../assets/images/MUI.png";

function Skills() {
  return (
    <div name="skills" className="container mx-auto">
      {/* Top */}
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-indigo-600 font-bold uppercase">Skills</h1>
      </div>
      {/* Bottom */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-20 px-5 mx-auto ">
        {/* Card */}
        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={HTML} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">HTML</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={CSS} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">CSS</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={JAVASCRIPT} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">JAVASCRIPT</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-7 w-40" src={BOOTSTRAP} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">BOOTSTRAP</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={TAILWIND} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">TAILWIND</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={REACT} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">REACT</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={NODE} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">NODE</h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 duration-500 items-center">
          <img className="mx-auto my-3 w-40" src={MUI} alt="html" />
          <h1 className="font-medium text-gray-700 text-lg my-4">
            MATERIAL-UI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
