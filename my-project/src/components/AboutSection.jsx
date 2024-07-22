import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import programming1 from "../img/Programming-bro.svg";
import programming from "../img/Code typing-bro (1).svg";
import { motion } from "framer-motion";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" max-sm:flex-col flex sm:gap-[60px]">
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>TailwindCSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        
      </ul>
      <div className="  flex lg:flex-row lg:gap-[60px] flex-col">
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Mongodb</li>
          <li>Git</li>
          <li>Github</li>
        </ul>

      </div>


      </div>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack SoftWare Engineering</li>
        <li>Alx Africa</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack SoftWare Engineer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div 
        animate={{ y: [0, 20, 0], transition: { repeat: Infinity, duration: 2 } }}

        className="max-md:hidden flex justify-start items-start">
        <img src={programming} width={500} height={500} />


        </motion.div>
        <motion.div
        initial={{x:"100vh"}}
        animate={{x:"0",transition:{ type:'spring',damping:10, duration:2}}}
         className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate full-stack web developer with a knack for crafting interactive 
          and responsive applications. Combining expertise in front-end technologies like React and 
          Tailwind with a solid backend foundation in Node.js, Python, and databases, I am a fast learner 
          eager to tackle innovative projects. Let us build something remarkable together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
