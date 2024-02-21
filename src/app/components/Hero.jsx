import React from 'react'
import {
    FaRegEye,
    FaRegMoon,
    FaRegSun,
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

import mepg from "../images/mepg.png";


const Hero = () => {
    return (
        <div
            id="home"
            className={`
    relative
   
    w-full text-white
    bg-cover bg-center bg-no-repeat  min-[767px]:rounded-b-[50px]
    min-h-screen  overflow-hidden
    max-[767px]:h-[100vh] flex-col-reverse justify-center items-center
    flex min-[767px]:items-center min-[767px]:justify-center
    `}
        >   
            <div className='h-[20vh] flex items-end'><div className="mouse "></div></div>
            
            <div className='flex flex-col-reverse items-center'>
                <div className="flex flex-col items-center z-10 ">
                    <div>
                        <div className="font-lexend">I am</div>
                        <div className=" font-lexend text-[6rem] max-[767px]:text-[3rem]">
                            Rishi Raj
                        </div>
                    </div>
                    <div className="max-[767px]:text-[0.6rem]">
                        Developer - Builder - Problem-Solver
                    </div>
                </div>
                <Image
                    src={mepg}
                    alt="me"
                    className="z-10 profilePhoto aspect-square w-[10rem]"
                />
            </div>


            {/* <Image
      src={juice}
      alt="me"
      className="z-1 floatJuice absolute top-0 -left-10 w-[6rem] duration-100 origin-bottom"
    />
    <Image
      src={pc}
      alt="me"
      className="z-1 floatPc absolute top-0 right-0 w-[6rem] duration-100 origin-bottom"
    /> */}
            <div className="fixed hidden  top-0 w-[100%] justify-around  z-10 bg-white/90 rounded-b-3xl items-center">
                <div className="w-[25%]  flex justify-center max-[767px]:hidden">
                    {" "}
                    <Image src={mepg} alt="me" className="z-10 w-[3rem] h-[3rem]" />
                </div>
                <div className="font-mukta  flex-wrap w-[50%] max-[767px]:w-[100%] max-[767px]:text-xl gap-2  justify-around flex">
                    <input
                        type="button"
                        value="Home"
                        className=" cursor-pointer"
                        onClick={() => {
                            document.getElementById("home").scrollIntoView();
                        }}
                    />
                    <input
                        type="button"
                        value="About"
                        className=" cursor-pointer"
                        onClick={() => {
                            document.getElementById("about").scrollIntoView();
                        }}
                    />
                    <input
                        type="button"
                        value="Skills"
                        className=" cursor-pointer"
                        onClick={() => {
                            document.getElementById("skills").scrollIntoView();
                        }}
                    />
                    <input
                        type="button"
                        value="Projects"
                        className=" cursor-pointer"
                        onClick={() => {
                            document.getElementById("projects").scrollIntoView();
                        }}
                    />
                </div>
                <div className="w-[25%] flex justify-center max-[767px]:hidden">
                    <label class="label">
                        <div class="toggle">
                            <input
                                class="toggle-state"
                                type="checkbox"
                                name="check"
                                value="check"
                            //   onClick={() => {
                            //     settheme(!theme);
                            //   }}
                            />
                            <div
                                className={`indicator`}
                            ></div>
                        </div>
                    </label>
                </div>

            </div>

            <motion.div
                transition={{
                    duration: 1,
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                className={`
      max-[767px]:top-0 max-[767px]:left-0 max-[767px]:py-3  max-[767px]:border-2 max-[767px]:border-l-0
      max-[767px]:border-t-0
      min-[768px]:top-1/3 min-[768px]:left-0
      bg-black text-white
       min-[768px]:flex-col 
       border-2 border-l-0
        socialBanner flex justify-center items-center	  z-10 fixed gap-4  max-[767px]:rounded-br-xl  py-6 px-3 min-[768px]:rounded-r-lg`}
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
    )
}

export default Hero