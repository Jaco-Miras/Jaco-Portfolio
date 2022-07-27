import React from "react";
import SLIDEDEPOT from "../assets/images/slidedepot.png";
import GENCO from "../assets/images/genco.png";
import DORSHS from "../assets/images/Dorshs.png";
import CROWDPH from "../assets/images/crowdph.png";

function Works() {
  return (
    <div name="works" className="container mx-auto">
      {/* Top */}
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 className="text-3xl dark:text-white">Works & Projects</h1>
      </div>
      {/* Bottom */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center px-5 py-20 mx-auto">
        {/* Card */}
        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 transition-all items-center">
          <img
            className="mx-auto my-7 rounded-md w-60"
            src={SLIDEDEPOT}
            alt="html"
          />
          <h1 className="font-medium text-gray-700 text-lg my-4">
            Slide Depot
          </h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 transition-all items-center">
          <img
            className="mx-auto my-7 rounded-md w-60"
            src={GENCO}
            alt="html"
          />
          <h1 className="font-medium text-gray-700 text-lg my-4">
            Genco Pizza
          </h1>
        </div>

        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 transition-all items-center">
          <img
            className="mx-auto my-7 rounded-md w-60"
            src={DORSHS}
            alt="html"
          />
          <h1 className="font-medium text-gray-700 text-lg my-4">DORSHS</h1>
        </div>
        <div className="shadow-md  shadow-[#040c16] mt-4 hover:scale-110 transition-all items-center">
          <img
            className="mx-auto my-7 rounded-md w-60"
            src={CROWDPH}
            alt="html"
          />
          <h1 className="font-medium text-gray-700 text-lg my-4">Crowd PH</h1>
        </div>
      </div>
    </div>
  );
}

export default Works;
