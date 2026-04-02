"use client";

import React from "react";
import Link from "next/link";

// Local utilities and hooks
import { allProjects } from "@/lib/data/projectData";

// Local components
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import ProjectCard from "@/components/ui/projectCard";

export default function Home() {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <main>
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6">
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-4 w-full">
          <HeaderMain />
        </section>

        <section className="h-[25rem] md:h-[40rem] flex justify-center items-center">
          <h1 className="font-tiempos-text font-extralight text-center sm:text-[3rem] md:text-[4rem]">
            I'm Rajat, an <span className="italic">Engineer </span>
            <br /> turned <span className="italic">Product Designer</span>
          </h1>
        </section>

        <div className="w-full flex gap-5 flex-col">
          <h2 className="text-secondary-color-dark font-tiempos-text font-light text-[3rem]">
            Selected Work
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.num}
                project={project}
                href={project.href}
              />
            ))}
          </section>
          <div className="w-full flex justify-center items-center">
            <Button
              asChild
              variant="default"
              className="border border-tertiary-color-dark font-azeret-mono rounded-[0.375rem] text-primary-color-dark"
            >
              <Link href="/archive">VIEW ALL</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
      </div>
    </main>
  );
}
