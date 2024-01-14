"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegEye,
  FaRegMoon,
  FaRegSun,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import toshare from "./images/toshare.JPG";
import appleclonse from "./images/appleclone.JPG";

export default function Home() {
  const [theme, settheme] = useState("dark");
  const projects = [
    {
      projectTile: "ToShare",
      techstack: ["ReactJS", "Firebase"],
      link: "https://toshare.vercel.app/",
      source: "bg-[url('./images/toshare.JPG')]",
    },
    {
      projectTile: "ToShare",
      techstack: ["ReactJS", "Firebase"],
      link: "https://toshare.vercel.app/",
      source: "bg-[url('./images/toshare.JPG')]",
    },
    {
      projectTile: "ToShare",
      techstack: ["ReactJS", "Firebase"],
      link: "https://toshare.vercel.app/",
      source: "bg-[url('./images/toshare.JPG')]",
    },
    {
      projectTile: "Apple Clone",
      techstack: ["NextJS", "Framer-Motion"],
      link: "https://appleclone-gilt.vercel.app/",
      source: "bg-[url('./images/appleclone.JPG')]",
    },
  ];
  const techStack = [
    "Javascript",
    "ReactJS",
    "NextJS",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "Firebase",
    "TailwindCSS",
    "HTML",
    "CSS",
    "MySql",
  ];
  // `${theme === "dark" ? "bg-black" : "bg-white"}`}
  return (
    <main className={`overflow-hidden`}>
      <div
        className={`
        ${theme === "dark" ? "bg-black" : "bg-white"}
        w-full
        min-h-screen relative overflow-hidden
        max-[767px]:h-[100vh]
        `}
      >
        {/* <div className={`flex ${theme==="dark"?"flex-row":"flex-row-reverse"} fixed top-1 right-1`}>
          <button className="text-2xl	rounded-full bg-orange-500	text-white	 p-1 m-1" onClick={()=>{settheme("light")}}>
            <FaRegSun />
          </button>
          <button className="text-2xl	rounded-full bg-cyan-900 text-white	 p-1 m-1	" onClick={()=>{settheme("dark")}}>
            <FaRegMoon />
          </button>
        </div> */}
        <motion.div
          initial={{ y: 100 }}
          transition={{
            duration: 1,
            // delay: 3,
          }}
          animate={{ y: 0 }}
          className="
          max-[767px]:h-[350px] 
          z-10 absolute  bottom-0 left-0 w-full h-[500px] bg-[url('./images/heroman.png')] 
          bg-contain	bg-bottom	bg-no-repeat"
        ></motion.div>
        <div className="relative flex flex-col w-full h-screen">
          <motion.span
            initial={{ x: "50%" }}
            transition={{
              duration: 1,
              // delay: 3,
            }}
            animate={{ x: "0%" }}
            className=" 
            max-[767px]:text-[18vw] 
            max-[767px]:top-[30%]
            min-[768px]:text-[200px] absolute  
            min-[768px]:top-0 min-[768px]:right-0 text-transparent stroke-white	outlined 
            font-mukta">
            HEY, THERE!
          </motion.span>
          <motion.span
            initial={{ y: "-100%" }}
            transition={{
              duration: 1,
              // delay: 3,
            }}
            animate={{ y: "0%" }}
            className="
            max-[767px]:top-[41%]
            max-[767px]:text-[15vw] 
            min-[768px]:top-[20%] min-[768px]:left-10 
            min-[768px]:text-[100px] absolute
             bg-white text-black 
            font-lexend "
          >
            I AM
          </motion.span>
          <motion.span
            initial={{ x: "-50%" }}
            transition={{
              duration: 1,
              // delay: 3,
            }}
            animate={{ x: "0%" }}
            className="
            max-[767px]:top-[51%]
            max-[767px]:text-[15vw] 
            min-[768px]:text-[150px] absolute 
            min-[768px]:top-[50%] min-[768px]:left-0 text-white 
            font-lexend  w-full"
          >
            DEVELOPER
          </motion.span>
          
          <motion.span
            initial={{ x: "50%" }}
            transition={{
              duration: 1,
              // delay: 3,
            }}
            animate={{ x: "0%" }}
            className=" 
            max-[767px]:top-[61%]
            max-[767px]:text-[7vw] 
            min-[768px]:text-[120px] 
            min-[768px]:right-0 min-[768px]:top-[70%] 
            absolute 
             
            text-white font-lexend "
          >
            BUILDER
          </motion.span>
        </div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          className={`
          max-[767px]:top-0 max-[767px]:left-0 min-[768px]:top-1/3 min-[768px]:left-0
          
          max-[767px]:py-3 max-[767px]:px-5 max-[767px]:border-t-0 min-[768px]:flex-col min-[768px]:border-l-0
          
           ${
             theme === "dark"
               ? "text-white bg-black border-white"
               : "text-black border-black"
           } flex justify-center items-center	  z-10 fixed gap-4 border-2 py-6 px-3 rounded-r-lg`}
        >
          <a
            className="text-2xl hover:scale-150 hover:text-orange-800 duration-150"
            href="https://github.com/Rishi1314"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            className="text-2xl hover:scale-150 hover:text-sky-400 duration-150"
            href="https://www.linkedin.com/in/rishi-raj-a36930206/"
            target="blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-2xl hover:scale-150	duration-150"
            href="https://twitter.com/rishirajbdev"
            target="blank"
          >
            <FaXTwitter />
          </a>
        </motion.div>
      </div>
      <div className="items-center justify-center flex flex-col text-white bg-neutral-900	">
        <div className="flex w-[100%] flex-col justify-center items-center">
          <h1 className="my-6 max-[767px]:text-2xl min-[768px]:text-4xl">
            My Projects
          </h1>
          <div className="relative flex flex-wrap gap-6 max-[767px]:w-[90%] min-[768px]:w-1/2">
            <a href="https://appleclone-gilt.vercel.app" target="blank">
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center flex flex-col relative overflow-hidden rounded-[20px] bg-black pt-20
             min-[768px]:w-[700px] min-[768px]:h-[400px]
             max-[767px]:w-[100%]
            ">
              <motion.video autoPlay muted className="z-0">
                <source src="/iphoneherovideo.mp4" type="video/mp4" />
              </motion.video>
              <div className="flex flex-col z-1">
                <span className="text-2xl w-full max-[767px]:text-[5vw] absolute top-0  font-lexend text-[#3a75f5]">
                  {"Iphone "}
                  <span className=" text-[#5689f8]">Website</span>
                </span>
                <span className="w-full max-[767px]:text-[3vw] absolute top-6 ">
                  Built using NextJS and Framer-Motion
                </span>
              </div>
            </div>
            </a>
            <a href="https://toshare.vercel.app" target="blank">
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
             min-[768px]:w-[700px] min-[768px]:min-h-[400px]
             max-[767px]:min-w-[90vw] max-[767px]:h-[30vh]
            
            justify-center items-center flex flex-col relative overflow-hidden rounded-[20px] bg-[#FAFAFA] pt-20">
              
              <motion.div 
            transition={{
              duration: 1,
              // delay: 4,
            }}
            initial={{
              x:"100%"
            }}
            whileInView={{
              x:"0%"
            }} viewport={{ once: true }} 
            className="absolute bottom-0 bg-[url('./images/toshare.JPG')] 
            bg-contain bg-bottom bg-no-repeat 
            rounded-[20px] 
            w-[100%]
            min-h-[100%]
          "></motion.div>
            <div className="absolute top-0 flex flex-col text-center text-black z-2 mb-1">
                <span className="text-4xl max-[767px]:text-[5vw] font-lexend text-[#69ADFA] leading-none">ToShare</span>
                <span className="max-[767px]:text-[3vw] font-mukta">Decentralized File Sharing.</span>
              </div>
              {/* <motion.div
              transition={{
                duration: 1,
                // delay: 4,
              }}
              initial={{
                y:400
              }}
              whileInView={{
                y:100
              }} viewport={{ once: true }}
              className="absolute bottom-0 left-0 bg-[url('./images/tosharemobile.png')] bg-contain bg-center bg-no-repeat w-[200px] h-[400px]"></motion.div> */}
            </div>
            </a>

            
          </div>
        </div>
      </div>
    </main>
  );
}
