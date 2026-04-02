"use client";

import React from "react";

// Local components
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import ProjectCard from "@/components/ui/projectCard";
import { allProjects } from "@/lib/data/projectData";

export default function Archive() {
  const projects = allProjects.filter((project) => project.featured);

  return (
    <main>
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6">
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain />
        </section>

        <article className="w-full">
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {projects.map((project) => (
              <ProjectCard
                key={project.num}
                project={project}
                href={{ pathname: project.href, query: { from: "all-works" } }}
              />
            ))}
          </section>
        </article>
        <Footer />
      </div>
      </div>
    </main>
  );
}
