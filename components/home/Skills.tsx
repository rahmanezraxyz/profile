import React from "react";
import { skills, tools } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";
function Skills() {
  return (
    <div>
    <div id="learnmore" className="mb-10">
        <SectionTitle title="Languages, Skills and Tools." />
    </div>
    <div className="flex flex-col md:flex-row justify-between relative mt-10 mb-30">
      
        <div>
        <h2 className="relative text-2xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0">
        {""}
        <br />
        The <span className="text-fun-pink">Languages</span> and <span className="text-fun-pink">Frameworks</span> I have used.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
        </div>
      
      <div className="justify-end lg:mr-8 md:mr-8">
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div className="bg-fun-gray-dark w-20 p-4 rounded-lg">
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray-light font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
            </div>
          );
        })}
      </div>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-between relative lg:my-20 sm:mt-30">
      
        <div>
        <h2 className="relative text-2xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0">
        {""}
        <br />
        The <span className="text-fun-pink">Tools</span> I have used to achieve <span className="text-fun-pink">success.</span>
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        
      </h2>
        </div>
      
      <div className="justify-end lg:mr-8 md:mr-8">
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {tools.map((item, index) => {
          return (
            <div className="bg-fun-gray-dark w-20 p-4 rounded-lg">
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray-light font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
            </div>
           
          );
        })}
      </div>
      </div>
      
    </div>
    
    </div>
   
  );
}

export default Skills;
