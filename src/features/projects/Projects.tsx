import React from "react";

import { projects } from "@/data/projects";

import DetailCard from "@/components/ui/detailCard/DetailCard";

const Projects = () => {
  return (
    <div className="relative z-50 mx-auto -mt-24 max-w-7xl px-6 pb-16 sm:px-6 lg:px-32">
      <div className="space-y-12">
        <ul
          role="list"
          className="grid auto-rows-fr space-y-12 sm:gap-x-16 sm:gap-y-12 sm:space-y-0 md:grid-cols-2 lg:gap-x-16"
        >
          {projects.map((project) => (
            <DetailCard key={project.name} DetailCardData={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
