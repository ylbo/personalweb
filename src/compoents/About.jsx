import React from "react";
import about from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto">
      <div className="flex sm:flex-row flex-col-reverse items-center mx-auto md:gap-6 gap-12 px-10 max-w-6xl">
        <div className="w-[400px] h-full">
          <img
            src={about}
            alt="about"
            className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
          />
        </div>
        <div className="p-2">
          <div className="text-gray-300 my-3">
            <h3 className="text-5xl text-white font-bold mx-8">
              About <span className="primary-color">Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              sdfsdf sdfsdfsdfsd dfsdfdsfs fsdfsfdsdfdsfsdfsdfsdf sdfdsf, sdfsdf
            </p>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[333333] p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-sx">Project</span>
              </p>
            </div>

            <div className="bg-[333333] p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                3<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-sx">years experience</span>
              </p>
            </div>

            <div className="bg-[333333] p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                10
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-sx">happy clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
