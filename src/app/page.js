"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
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
import mepg from "./images/mepg.png";
import circle from "./images/circle.png";
import juice from "./images/juice.png";
import pc from "./images/pc.png";
import Image from "next/image";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Home() {
  const [theme, settheme] = useState("dark");
  const [github, setgithub] = useState({});
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const githubApi = async () => {
      const res = await axios.get(
        "https://api.github.com/users/Rishi1314",
        customConfig
      );
      setgithub(res);
      console.log(res);
    };
    githubApi();
  }, []);

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
  // https://matterapp.com/
  return (
    <main className={`bg-neutral-900 overflow-hidden`}>
      <div
        className={`
        relative
        ${theme === "dark" ? "bg-white" : "bg-white"}
        w-full
        bg-cover bg-center bg-no-repeat  rounded-b-[50px]
        min-h-screen  overflow-hidden
        max-[767px]:h-[100vh] max-[768px]:flex-col max-[768px]:justify-end justify-center items-center
        flex min-[767px]:items-center min-[767px]:justify-center
        `}
      >
        <div className="flex z-10 ">
          <div className="font-lexend">I am</div>
          <motion.div
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-contain bg-top bg-no-repeat bg-[url('./images/circle.png')]  font-seewead text-[800%] max-[767px]:text-[500%]"
          >
            Rishi Raj
          </motion.div>
        </div>
        <div className="bg-[url('./images/mepg.png')] bg-cover bg-center bg-no-repeat"></div>
        <Image src={mepg} alt="me" className="z-10" />
        <Image
          src={juice}
          alt="me"
          className="z-1 floatJuice absolute top-0 -left-10 w-[6rem] duration-100 origin-bottom"
        />
        <Image
          src={pc}
          alt="me"
          className="z-1 floatPc absolute top-0 right-0 w-[6rem] duration-100 origin-bottom"
        />
        {/* <div className={`flex ${theme==="dark"?"flex-row":"flex-row-reverse"} fixed top-1 right-1`}>
          <button className="text-2xl	rounded-full bg-orange-500	text-white	 p-1 m-1" onClick={()=>{settheme("light")}}>
            <FaRegSun />
          </button>
          <button className="text-2xl	rounded-full bg-cyan-900 text-white	 p-1 m-1	" onClick={()=>{settheme("dark")}}>
            <FaRegMoon />
          </button>
        </div> */}

        <motion.div
          transition={{
            duration: 1,
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          className={`
          max-[767px]:top-0 max-[767px]:left-0 min-[768px]:top-1/3 min-[768px]:left-0
          
          max-[767px]:py-3 max-[767px]:px-5 max-[767px]:border-t-0 min-[768px]:flex-col 
          
           bg-black text-white socialBanner flex justify-center items-center	  z-10 fixed gap-4  py-6 px-3 rounded-r-lg`}
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
      <div className="items-center justify-center flex flex-col text-white 	">
        <div className=" min-h-[100vh]  flex w-[100%]  flex-col py-10 justify-center items-center overflow-hidden relative">
          <div className=" flex max-[767px]:flex-col w-[80%] gap-3">
            <motion.div
              transition={{
                duration: 1,
                // delay: 4,
              }}
              initial={{
                x: -100,
                // opacity: 0.5
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              class="rounded-[40px] profileCard p-2 hover:scale-[101%] duration-100 flex flex-col justify-center items-center isolate aspect-square w-[50%] max-[767px]:w-[100%]"
            >
              <div className="w-[80%] font-lexend max-[767px]:text-3xl text-6xl">
                Hi, My name is Rishi Raj B.
              </div>
              <div className="font-mukta w-[80%] text-[#cfcece]">
                {`
                I enjoy creating things that exist on the internet I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Interested in the entire Frontend spectrum and working on ambitious projects with positive people.
                When i don't code, I like to photograph, play Basketball and Video Games, Design stuff.
                `}
              </div>
            </motion.div>
            <div className="flex flex-col gap-3 w-[50%] max-[767px]:w-[100%] justify-center items-center">
              <motion.div
                transition={{
                  duration: 1,
                  // delay: 4,
                }}
                initial={{
                  x: 100,
                  // opacity: 0.5
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                className="rounded-[20px] profileCard flex  flex-col p-4 w-[100%] h-[195px] hover:scale-[101%] duration-200  hover:bg-[#22a2f8]"
              >
                <div className="flex w-1/1 justify-between">
                  <div className="flex w-1/1 gap-1 justify-start">
                    <div className="duration-200 hover:border-white aspect-square w-[50px] border-2 border-black bg-contain bg-center bg-no-repeat rounded-full bg-[url('./images/me.jpg')]"></div>
                    <div className="flex flex-col justify-center">
                      <div className="leading-tight">Rishi Raj</div>
                      <div className=" hover:underline duration-200 leading-tight text-[#cfcece]">
                        rishirajbdev
                      </div>
                    </div>
                  </div>
                  <a
                    className="w-[100px] bg-[#fafafa] font-mukta hover:scale-105 duration-200 text-black h-[30px] rounded-xl flex justify-center items-center"
                    href="https://twitter.com/rishirajbdev"
                    target="blank"
                  >
                    Follow
                  </a>
                </div>
                <div className="w-1/1 font-mukta flex flex-col justify-center items-start aspect-video">
                  <span className="text-3xl max-[767px]:text-2xl">
                    {`I `}
                    <span className="text-[#bbbcbc] underline">{`build`}</span>
                    {` in public and occasionally tweet about random stuff.`}
                  </span>

                  <span>#100DaysOfCode</span>
                </div>
              </motion.div>
              <motion.div
                transition={{
                  duration: 1,
                  // delay: 4,
                }}
                initial={{
                  y: 100,
                  // opacity: 0.5
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                className="rounded-[20px] profileCard flex justify-center items-center w-[100%] h-[395px] hover:scale-[101%] duration-100"
              >
                {/* <div className={`duration-200 hover:border-white aspect-square w-[50px] border-2 border-black bg-contain bg-center bg-no-repeat rounded-full ${bg-[url('./images/me.jpg')]}`}></div> */}
                <div className="w-[80%] font-lexend max-[767px]:text-3xl text-6xl">{`Currently learning Typescript and Developing "Flex"`}</div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          id="Skills"
          className="relative h-[100vh] w-[100%] flex flex-col  items-center"
        >
          <h1 className="font-seewead my-6 max-[767px]:text-2xl min-[768px]:text-4xl">
            Skills
          </h1>
          <div className="profileCard skills flex flex-wrap gap-4 items-center justify-center max-[767px]:w-[80%] w-[50%] p-10 rounded-lg">
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:text-sm text-xl">
              <SiReact />
              React
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
            <SiTailwindcss />
              TailwindCSS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiJavascript />
              Javascript
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiTypescript />
              Typescript
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiNextdotjs />
              Next
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiNodedotjs />
              NodeJS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiNodedotjs />
              NodeJS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiMongodb />
              MongoDB
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiPython />
              Python
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 text-xl max-[767px]:text-sm">
              <SiExpress />
              Express
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] flex-col justify-center items-center">
          <h1 className="font-seewead my-6 max-[767px]:text-2xl min-[768px]:text-4xl">
            My Projects
          </h1>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <motion.div
              transition={{
                duration: 1,
                // delay: 4,
              }}
              initial={{
                opacity: 0.5,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="  gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 "
            >
              <div className=" text-2xl mt-2">MERN-Auth</div>
              <a
                href="https://mernauth-ggum.onrender.com"
                className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/mernAuth.png')]"
                target="blank"
              ></a>
              <div className="w-[80%]">
                Auth module that uses MERN and Google OAuth
              </div>
              <div className="w-[80%] gap-2 flex text-center">
                <a
                  href="https://mernauth-ggum.onrender.com"
                  className="hover:scale-105 duration-200 w-[50%] text-black px-2 rounded-md text-xl bg-slate-200"
                  target="blank"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Rishi1314/mernAuth"
                  className="hover:scale-105 duration-200 w-[50%] text-white px-2 rounded-md text-xl bg-orange-400"
                  target="blank"
                >
                  Github
                </a>
              </div>
              <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">TailwindCSS</div>
                <div className=" bg-slate-600 px-2 rounded-md">
                  Redux-Toolkit
                </div>
                <div className=" bg-slate-600 px-2 rounded-md">NodeJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">ExpressJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">MongoDB</div>
                <div className=" bg-slate-600 px-2 rounded-md">
                  JsonWebToken
                </div>
              </div>
              <div className="flex gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                  Completed
                </div>
                <div className=" rounded-md px-2 bg-sky-950 justify-self-end">
                  Full-Stack
                </div>
              </div>
            </motion.div>
            <motion.div
              transition={{
                duration: 1,
                // delay: 4,
              }}
              initial={{
                opacity: 0.5,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 "
            >
              <div className=" text-2xl mt-2 ">ToShare</div>
              <a
                href="https://toshare.vercel.app"
                className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/toshare.JPG')]"
                target="blank"
              ></a>
              <div className="w-[80%]">
                Decentralized File Sharing using IPFS
              </div>
              <div className="w-[80%] flex text-center">
                <a
                  href="https://toshare.vercel.app"
                  className="hover:scale-105 duration-200 w-[100%] text-black px-2 rounded-md text-xl bg-slate-200"
                  target="blank"
                >
                  Visit
                </a>
              </div>
              <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">Web3Storage</div>
                <div className=" bg-slate-600 px-2 rounded-md">IPFS</div>
                <div className=" bg-slate-600 px-2 rounded-md">Firebase</div>
                <div className=" bg-slate-600 px-2 rounded-md">
                  Framer-Motion
                </div>
              </div>
              <div className="flex gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                  Completed
                </div>
                <div className=" rounded-md px-2 bg-sky-950 justify-self-end">
                  Full-Stack
                </div>
              </div>
            </motion.div>
            <motion.div
              transition={{
                duration: 1,
                // delay: 4,
              }}
              initial={{
                opacity: 0.5,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="gap-2 flex flex-col items-center max-[767px]:w-[90%] w-[30%] h-[450px] rounded-lg border border-white bg-black/20 shadow-lg ring-1 ring-black/5 "
            >
              <div className=" text-2xl mt-2 ">IPhone Website</div>
              <a
                href="https://appleclone-gilt.vercel.app/"
                className=" hover:scale-105 duration-200 rounded-md aspect-video w-[80%] bg-center bg-cover bg-no-repeat bg-[url('./images/appleclone.JPG')]"
                target="blank"
              ></a>
              <div className="w-[80%]">Aesthetic Website for IPhone</div>
              <div className="w-[80%] gap-2 flex text-center">
                <a
                  href="https://appleclone-gilt.vercel.app/"
                  className="hover:scale-105 duration-200 w-[100%] text-black px-2 rounded-md text-xl bg-slate-200"
                  target="blank"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Rishi1314/apple-website-nextJS-clone"
                  className="hover:scale-105 duration-200 w-[100%] text-white px-2 rounded-md text-xl bg-orange-400"
                  target="blank"
                >
                  Visit
                </a>
              </div>
              <div className=" w-[80%] items-center justify-center flex flex-wrap gap-2">
                <div className=" bg-slate-600 px-2 rounded-md">ReactJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">NextJS</div>
                <div className=" bg-slate-600 px-2 rounded-md">
                  Framer-Motion
                </div>
              </div>
              <div className="flex  gap-2">
                <div className=" rounded-md px-2 bg-green-400 justify-self-end">
                  Completed
                </div>
                <div className=" rounded-md px-2 bg-cyan-600 justify-self-end">
                  Front-End
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
