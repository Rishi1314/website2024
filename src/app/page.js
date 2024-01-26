"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"
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
  const [github, setgithub] = useState({});
  const customConfig = {
    headers: {
    'Content-Type': 'application/json'
    },
};
  useEffect(() => {
    const githubApi=async()=>{
      const res=await axios.get("https://api.github.com/users/Rishi1314",customConfig)
      setgithub(res);
      console.log(res);
    }
    githubApi();
  },[])
  
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
        min-h-screen flex justify-center overflow-hidden
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
        <motion.div initial={{ x: 300 }}
          transition={{
            duration: 1,
            // delay: 3,
          }}
          animate={{ x: 0 }} className="flex flex-col mt-[50%] absolute w-[80%] text-white 
            font-lexend p-2 text-2xl min-[768px]:hidden">
              Hey, There! I am a Developer/Builder based out of Hyderabad, India.
        </motion.div>
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
            max-[767px]:hidden
            
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
            max-[767px]:hidden
            
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
            max-[767px]:hidden
            
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
            max-[767px]:hidden
           
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
        <div className="flex w-[100%]  flex-col py-10 justify-center items-center" >
          <div className="flex max-[767px]:flex-col w-[80%] gap-3">
          <div class="p-2 hover:scale-[101%] duration-100 flex flex-col justify-center items-center isolate aspect-square w-[50%] max-[767px]:w-[100%]  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
            <div className="w-[80%] font-lexend max-[767px]:text-3xl text-6xl">
              Hi, My name is Rishi Raj B.
            </div>
            <div className="font-mukta w-[80%] text-[#cfcece]">
              {
                `
                I enjoy creating things that exist on the internet I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Interested in the entire Frontend spectrum and working on ambitious projects with positive people.
                When i don't code, I like to photograph, play Basketball and Video Games, Design stuff.
                `
              }
            </div>
           </div>
            <div className="flex flex-col gap-3 w-[50%] max-[767px]:w-[100%] justify-center items-center">
              <div className="flex  flex-col p-2 w-[100%] h-[195px] hover:scale-[101%] duration-200 rounded-xl bg-white/20 hover:bg-[#22a2f8] shadow-lg ring-1 ring-black/5">
                <div className="flex w-1/1 justify-between">
                <div className="flex w-1/1 gap-1 justify-start">
                  <div className="duration-200 hover:border-white aspect-square w-[50px] border-2 border-black bg-contain bg-center bg-no-repeat rounded-full bg-[url('./images/me.jpg')]"></div>
                  <div className="flex flex-col justify-center">
                    <div className="leading-tight" >Rishi Raj</div>
                    <div className=" hover:underline duration-200 leading-tight text-[#cfcece]" >rishirajbdev</div>
                  </div>
                </div>
                <a 
                className="w-[100px] bg-[#fafafa] font-mukta hover:scale-105 duration-200 text-black h-[30px] rounded-xl flex justify-center items-center"
                href="https://twitter.com/rishirajbdev" target="blank">
                  Follow
                </a>
                </div>
                <div className="w-1/1 font-mukta flex flex-col justify-center items-start aspect-video">
                  <span className="text-4xl max-[767px]:text-2xl">{`I `} 
                  <span className="text-[#bbbcbc] underline">{`build`}</span> 
                  {` in public and occasionally tweet about random stuff.`}</span>
                   
                  <span>#100DaysOfCode</span>
                </div>
              </div>
              <div className="flex justify-center items-center w-[100%] h-[395px] hover:scale-[101%] duration-100 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
                    {/* <div className={`duration-200 hover:border-white aspect-square w-[50px] border-2 border-black bg-contain bg-center bg-no-repeat rounded-full ${bg-[url('./images/me.jpg')]}`}></div> */}
                    <div className="w-[80%] font-lexend max-[767px]:text-3xl text-6xl">{`Currently learning Typescript and Developing "Flex"`}</div>
              </div>
            </div>
          </div>
           
        </div>
      <div className="flex w-[100%] flex-col justify-center items-center">
          <h1 className="my-6 max-[767px]:text-2xl min-[768px]:text-4xl">
            My Projects
          </h1>
          <div className="flex flex-wrap gap-2 justify-center items-center">
              <div className="gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 ">
                <div className=" text-2xl mt-2">MERN-Auth</div>
                <a href="https://mernauth-ggum.onrender.com" className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/mernAuth.png')]" target="blank"></a>
                <div className="w-[80%]">Auth module that uses MERN and Google OAuth</div>
                <div className="w-[80%] gap-2 flex text-center">
                  <a href="https://mernauth-ggum.onrender.com" className="hover:scale-105 duration-200 w-[50%] text-black px-2 rounded-md text-xl bg-slate-200" target="blank">Visit</a>
                  <a href="https://github.com/Rishi1314/mernAuth" className="hover:scale-105 duration-200 w-[50%] text-white px-2 rounded-md text-xl bg-orange-400" target="blank">Github</a>
                </div>
                <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                  <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">TailwindCSS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">Redux-Toolkit</div>
                  <div className=" bg-slate-600 px-2 rounded-md">NodeJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">ExpressJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">MongoDB</div>
                  <div className=" bg-slate-600 px-2 rounded-md">JsonWebToken</div>
                </div>
                <div className="flex gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                    Completed
                </div>
                <div className=" rounded-md px-2 bg-sky-950 justify-self-end">
                    Full-Stack
                </div>
                </div>
              </div>
              <div className="gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 ">
                <div className=" text-2xl mt-2 ">ToShare</div>
                <a href="https://toshare.vercel.app" className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/toshare.JPG')]" target="blank"></a>
                <div className="w-[80%]">Decentralized File Sharing using IPFS</div>
                <div className="w-[80%] flex text-center">
                  <a href="https://toshare.vercel.app" className="hover:scale-105 duration-200 w-[100%] text-black px-2 rounded-md text-xl bg-slate-200" target="blank">Visit</a>
                </div>
                <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                  <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">Web3Storage</div>
                  <div className=" bg-slate-600 px-2 rounded-md">IPFS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">Firebase</div>
                  <div className=" bg-slate-600 px-2 rounded-md">Framer-Motion</div>
                </div>
                <div className="flex gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                    Completed
                </div>
                <div className=" rounded-md px-2 bg-sky-950 justify-self-end">
                    Full-Stack
                </div>
                </div>
              </div>
              <div className="gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 ">
                <div className=" text-2xl mt-2 ">IPhone Website</div>
                <a href="https://appleclone-gilt.vercel.app/" className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/appleclone.JPG')]" target="blank"></a>
                <div className="w-[80%]">Aesthetic Website for IPhone</div>
                <div className="w-[80%] gap-2 flex text-center">
                  <a href="https://appleclone-gilt.vercel.app/" className="hover:scale-105 duration-200 w-[100%] text-black px-2 rounded-md text-xl bg-slate-200" target="blank">Visit</a>
                  <a href="https://github.com/Rishi1314/apple-website-nextJS-clone" className="hover:scale-105 duration-200 w-[100%] text-white px-2 rounded-md text-xl bg-orange-400" target="blank">Visit</a>
                </div>
                <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                  <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">NextJS</div>
                  <div className=" bg-slate-600 px-2 rounded-md">Framer-Motion</div>
                </div>
                <div className="flex  gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                    Completed
                </div>
                <div className=" rounded-md px-2 bg-cyan-600 justify-self-end">
                    Front-End
                </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
