"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import { allProjects } from "@/lib/data/projectData";

export default function Archive() {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState<string>("projects");

  // Group projects by year
  const projectsByYear = useMemo(() => {
    return allProjects.reduce((acc, project) => {
      if (!acc[project.date]) {
        acc[project.date] = [];
      }
      acc[project.date].push(project);
      return acc;
    }, {} as Record<string, typeof allProjects>);
  }, []);

  // Sort years in descending order
  const sortedYears = useMemo(() => {
    return Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));
  }, [projectsByYear]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        // setHeaderText(window.innerWidth <= 470 ? "Rajat." : "Hey, I'm Rajat.");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    switch (buttonName) {
      case "home":
        router.push("/");
        break;
      case "about":
        router.push("/about");
        break;
    }
  };

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <Breadcrumbs crumbs={[{ label: "ALL WORKS" }]} />
        </section>

        <article className="w-full">
          <section className="flex flex-col gap-[3rem]">
            {sortedYears.map((year, yearIndex) => (
              <div key={year} className="flex flex-col gap-4">
                <h2 className="text-4xl text-primary-color">{year}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {projectsByYear[year].map((project, projectIndex) => (
                    <Link
                      key={project.num}
                      href={project.href}
                      className="flex flex-col gap-2 w-full group"
                    >
                      <div className="w-full relative overflow-hidden rounded-[0.375rem] inner-shadow-tertiary">
                        <Image
                          src={project.svgSrc}
                          alt={project.title}
                          width={1200}
                          height={800}
                          className="w-full border border-tertiary-color rounded-md shadow-md"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </article>
        <Footer />
      </div>
    </main>
  );
}
