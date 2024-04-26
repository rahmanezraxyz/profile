import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, I'm Faizan Javair.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I am a <span className="heroShiny1 text-fun-pink">Fullstack</span> Developer and a{" "}
          <span className="heroShiny2 text-fun-pink">DevOps</span> Engineer.
          <img
            className="sqD squiggle-hero-html w-16 top-[-140px] right-[-50px] lg:top-[-140px] lg:right-[180px]"
            style={{ animationDelay: "0.1s" , width: 200, height:200 }}
            src="/static/doodles/hero/react.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-420px] -right-1/4 right-[-20%] lg:bottom-[-400px] lg:right-[-120px] w-[400px]"
            style={{ animationDelay: "0.3s"}}
            src="/static/doodles/hero/faizan.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-450px] left-[-200px] lg:left-[-400px] lg:bottom-[-480px] sm:left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block rigth-[40px] lg:left-[-0px] bottom-[-150px]"
            style={{ animationDelay: "0.5s", width: 180, height:180 }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[40%] lg:right-[40%] sm:right-[40%]"
            style={{ animationDelay: "0.6s" , width: 300, height:300  }}
            src="/static/doodles/hero/docker.svg"
          />
          <img
            className="sqD right-[-60px] right-[-100px] bottom-[-350px] lg:[5%]"
            style={{ animationDelay: "0.7s" , width: 400, height:400 }}
            src="/static/doodles/hero/python.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-200px] sm:left-[-10px] lg:top-[-210px] lg:left-[40px]"
            style={{width: 300, height:300 }}
            src="/static/doodles/hero/line.svg"
          />
          {/* <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          /> */}
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
