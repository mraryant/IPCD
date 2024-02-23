'use client'
import React from "react";
import "./Hero.css";
import Image from "next/image";


const Hero = () => {
  return (
    <>
      <div id="hero-main" className="reletive flex justify-center  px-4   md:px-8">
        <div className="  absolute bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-3"></div>

        <video className="video v1 z-[-1]  " autoPlay muted loop src={require('../../public/assets/homevideo.mp4')} />

        <div id="hero-left" className="  w-[60%] h-[100%] flex flex-col justify-center  gap-[4vmax] ">

          <div id="hero-left-top" className="mt-4 flex flex-col gap-[3 vmax]">
            <h1 className=" text-[4vmax] min-text-[300px] font-['Oxanium']  leading-[5vmax]  "> <span className=" text-[--prime-yellow]">INSTITUTE</span>  OF PERSONNEL AND CORPORATE DEVELOPMENT</h1>
            <p className=" leading-tight  text-gray-200 text-[18px] w-[80%] tracking-[0.35px] "  >The IPCD envisions a world where work fosters human flourishing, not just a means to an end. It aims to professionalize people teams, positioning them as catalysts for societal change. The mission is to enhance effectiveness and recognition in the realm of personnel and corporate development.</p>
          </div>

          <div id="hero-left-bottom" className="flex ">
            <div id="hero-l-bottom-left" className="flex   ">
              <h1 className=" font-bold text-5xl text-stroke rotate-[-90deg] ml-[-10px] ">IPCD</h1>
            </div>
            <div id="hero-l-bottom-right" className="flex flex-col justify-center items-center gap-3">
              <h2 className="text-2xl">Central Institution Of Personnel And Corporate</h2>
              <div id="hero-bottom-buttons" className="flex gap-4">
                <button type="button" className=" font-['Oxanium'] btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Token</button>
                <button type="button" className=" font-['Oxanium'] btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">White Paper  </button>
                <button type="button" className=" font-['Oxanium'] btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contract</button>


              </div>
            </div>
          </div>

        </div>

        <div id="hero-right" className="relative w-[40%] h-[100%] flex justify-center gap-0    items-center ">
          <div id="hero-right-container" className="  border-2 mt-20 h-[610px] w-[260px] overflow-hidden rounded-[200px] bg-[url('/assets/heroCapBg.jpg')] bg-cover bg-opacity-80 bg-center">
            <div id="hero-rc-top " className="w-[100%] h-[60%] flex flex-col justify-center items-center gap-4 ">
              <h2 className="font-['Oxanium'] text-center text-xl w-[90%] px-4 mt-10" >Get In <span className=" text-[--prime-yellow]"></span>Touch   With <span className=" text-[--prime-yellow]">IPCD</span>  </h2>
              <div className="reletive flex  w-[100%] items-center p-3  ">
                <p className="text-[14px] leading-tight w-[70%] "  >IPCD fosters people excellence, urging organizations to view professionals as drivers of positive change in a human-centered future of work.</p>
                <div id="contact-div" className=" absolute left-[55%] rotate-90 flex flex-col justify-center items-center  ">
                  <h3 className=" text-xl   text-nowrap ">Connect With Us</h3>
                  <div className="flex gap-2" >
                    <Image
                      className="rotate-[-90deg]"
                      src=" /assets/facebook2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <Image
                      className="rotate-[-90deg]"
                      src=" /assets/instagram2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <Image
                      className="rotate-[-90deg]"
                      src=" /assets/youtube2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <Image
                      className="rotate-[-90deg]"
                      src=" /assets/tweeter2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </div>

                </div>
              </div>
            </div>
            <div id="hero-rc-bottom" class="  flex items-center justify-center overflow-hidden  w-[100%]  h-[40%] ">
              <video class="   w-[1000px] scale-[2.1]  " autoPlay muted loop src={require('../../public/assets/white-circle.mp4')} />
            </div>

          </div>
          {/* <h1 className="  absolute top-1/2 left-[500px] transform -translate-x-1/2 -translate-y-1/2  rotate-90">Here we are  top most Lorem ipsum dolor sit amet. </h1> */}

        </div>
      </div>
    </>
  );
};

export default Hero;
