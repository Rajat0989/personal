"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Local utilities and hooks
import { allProjects } from "@/lib/data/projectData";

// Local components
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

export default function Home() {
  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .map((project) => ({ ...project, year: project.date }));

  return (
    <main className="page-container">
      Portfolio coming soon....
      {/* <div className="flex flex-col gap-[2.5rem] items-center w-full">
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
              <Link
                key={`${project.year}-${project.num}`}
                href={project.href}
                className="flex flex-col gap-2 w-full group"
              >
                <div className="w-full relative aspect-[3/2] overflow-hidden rounded-md border border-tertiary-color shadow-md">
                  <Image
                    src={project.svgSrc}
                    alt={project.projectName}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  {project.title ? (
                    <p className="text-secondary-color text-lg font-medium">
                      {project.title}
                    </p>
                  ) : null}
                  <p className="font-tiempos-text font-light text-tertiary-color uppercase tracking-tight">
                    {project.year}
                    {project.type && (
                      <>
                        {" · "}
                        {project.type}
                      </>
                    )}
                  </p>
                </div>
              </Link>
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
      </div> */}
    </main>
  );
}
