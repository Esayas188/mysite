"use client";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import heroimg from "../../public/images/projects/hero.png"


const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl leading-tight sm:text-5xl lg:text-6xl  font-extrabold">
            <span className="text-transparent leading-tight bg-clip-text bg-black">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Esayas Fekade",
                1000,
                "Web Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 lg:text-xl">I specialize in creating innovative web applications. <br /> This allows me to combine my passion for technology <br /> with the ability to solve real-world problems.
          </p>
          <div>
            <a
              href="#contact"
              
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block  bg-[#121212] hover:bg-slate-800 rounded-full px-[80px] py-2">
              Hire Me
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 place-self-center  lg:mt-0"
        >
          <motion.div 
          animate={{ y: [0, 20, 0], transition: { repeat: Infinity, duration: 2 } }}

          className=" max-md:hidden rounded-full border border-black w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
            <img
              src={heroimg}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
