"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Architectural Company Website",
    description: "Project 2 description",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Esayas188/bruk",
    previewUrl: "https://projectbruk.netlify.app/ ",

  },
  {
    id: 2,
    title: "Recipe website",
    description: "Project 3 description",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Esayas188/recipe-mern",
    previewUrl: "https://delicious-new.netlify.app",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Esayas188/SamuelFasil_website",
    previewUrl: "https://samuelfasil.netlify.app/",
  },

  {
    id: 4,
    title: "Civil Engineering website",
    description: "Todo",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Esayas188/Civil-Engineering-website",
    previewUrl: "https://github.com/Esayas188/Civil-Engineering-website",
  },
  {
    id: 5,
    title: "React TodoList website",
    description: "Todo",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Esayas188/To-Do-_List",
    previewUrl: "https://mynewtodoapp0.netlify.app/",
  },





];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.div
          className=""

            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
