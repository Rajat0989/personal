"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import { allProjects } from "@/lib/data/projectData";

export default function Archive() {
  const projects = allProjects
    .filter((project) => project.featured)
    .map((project) => ({ ...project, year: project.date }));

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain />
          <Breadcrumbs crumbs={[{ label: "ALL WORKS" }]} />
        </section>

        <article className="w-full">
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {projects.map((project) => (
              <Link
                key={project.num}
                href={{ pathname: project.href, query: { from: "all-works" } }}
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
                    <p className="text-secondary-color text-large font-medium">
                      {project.title}
                    </p>
                  ) : null}
                  <span className="font-tiempos-text font-light text-tertiary-color text-large">
                    {project.year}
                    {project.type && (
                      <>
                        {" · "}
                        {project.type}
                      </>
                    )}
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </article>
        <Footer />
      </div>
    </main>
  );
}
