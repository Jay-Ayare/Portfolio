import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold  py-10 text-white">
        Web Projects
      </h1>
     
      <div className="h-full w-full flex flex-col flex-wrap mb-10 md:flex-row justify-around px-10 text-center">
      
       
      
        <ProjectCard
          src="/algoviz.webp"
          title="Algo Visualizer"
          description='• React-based algorithm visualizer showcasing various algorithms like searching, sorting, path-finding, etc.
          • Implemented various algorithms, such as selection sort, binary search, and BFS, using React.
          • Includes AI Algorithms like A* which takes 6X less time than Dijkstra.'
          link="https://algoprojectj.vercel.app/"
        />
        
      </div>

      
    </div>
  );
};

export default Projects;
