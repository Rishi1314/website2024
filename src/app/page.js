"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import appleClone from "./images/appleclone.JPG"

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import Hero from "./components/Hero";
import Image from "next/image";

export default function Home() {
  const [theme, settheme] = useState(true);
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
  
  // https://matterapp.com/
  return (
    <main className={`bg-neutral-900 overflow-hidden`}>
      <Hero/>
      <div
        id="about"
        className="items-center justify-center gap-2 flex flex-col text-white 	"
      >
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
              class="rounded-[40px]  profileCard p-2 hover:scale-[101%] duration-100 flex flex-col justify-center items-center isolate aspect-square w-[50%] max-[767px]:w-[100%] "
            >
              <div className="w-[80%] font-lexend max-[767px]:text-lg text-6xl">
                Hi, My name is Rishi Raj B.
              </div>
              <div className="font-mukta w-[80%] max-[767px]:text-sm  text-[#cfcece] ">
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
                className="rounded-[20px] xCard flex  flex-col p-4 w-[100%] max-[767px]:h-[20vh]  h-[195px] hover:scale-[101%] duration-200  hover:bg-[#0d72ff]"
              >
                <div className="flex w-1/1 justify-between">
                  <div className="flex w-1/1 gap-1 justify-start">
                    <div className="duration-200 hover:border-white aspect-square w-[50px] max-[767px]:w-[30px] border-2 border-black bg-contain bg-center bg-no-repeat rounded-full bg-[url('./images/me.jpg')]"></div>
                    <div className="flex flex-col justify-center max-[767px]:text-sm ">
                      <div className="leading-tight">Rishi Raj</div>
                      <div className=" hover:underline duration-200 leading-tight text-[#cfcece]">
                        rishirajbdev
                      </div>
                    </div>
                  </div>
                  <a
                    className="w-[100px] bg-[#fafafa] font-mukta max-[767px]:w-fit max-[767px]:px-2 hover:scale-105 max-[767px]:text-sm duration-200 text-black h-[30px] rounded-xl flex justify-center items-center"
                    href="https://twitter.com/rishirajbdev"
                    target="blank"
                  >
                    Follow
                  </a>
                </div>
                <div className="w-1/1 font-mukta flex flex-col justify-center items-start aspect-video">
                  <span className="text-3xl max-[767px]:text-sm">
                    {`I `}
                    <span className="text-[#bbbcbc] underline">{`build`}</span>
                    {` in public and occasionally tweet about random stuff.`}
                  </span>

                  <span className="max-[767px]:text-sm">#100DaysOfCode</span>
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
                <div className="w-[80%] flex flex-col font-lexend max-[767px]:text-sm text-6xl">
                  <GitHubCalendar  hideTotalCount={true} username="rishi1314" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          id="skills"
          className="min-h-[50vh] flex flex-col justify-center items-center"
        >
          <div className="profileCard  max-[767px]:max-h[50vh]  flex  flex-wrap max-[767px]:p-2  p-4 gap-4 items-center justify-center max-[767px]:w-[90%] w-[50%]   rounded-lg">
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit max-[767px]:p-1 p-4 max-[767px]:text-sm text-xl">
              <SiReact />
              React
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiTailwindcss />
              TailwindCSS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiJavascript />
              Javascript
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiTypescript />
              Typescript
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiNextdotjs />
              Next
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiNodedotjs />
              NodeJS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiNodedotjs />
              NodeJS
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiMongodb />
              MongoDB
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiPython />
              Python
            </div>
            <div className="flex gap-1 hover:scale-105 duration-200 items-center skillsCard w-fit  p-4 max-[767px]:p-1 text-xl max-[767px]:text-sm">
              <SiExpress />
              Express
            </div>
          </div>
        </div>
        <div
          id="projects"
          className=" flex w-[100%] flex-col items-center "
        >
          <h1 className="font-lexend w-[80%]  my-6 max-[767px]:text-2xl min-[768px]:text-4xl">
            My Projects
          </h1>
          <div className="flex justify-center w-[100%]">
            <div className="p-2 py-3 flex justify-between w-[80%] border-[#5555559b] border-solid border-y-2">
              <div className="bg-[url('./images/appleclone.JPG')] block rounded-[20px] border-[#5555559b] border-solid border-2 w-[250px] bg-contain bg-no-repeat bg-center  aspect-video">
                
              </div>
              <div>
                <h1 className="font-mukta max-[767px]:text-xl min-[768px]:text-4xl">Apple Clone</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
