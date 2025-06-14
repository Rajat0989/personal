"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import { HoverEffectWrapper } from "@/components/hoverEffectWrapper";
import { StaggerWrapper } from "@/components/staggerWrapper";

// Local utilities and hooks
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { useStaggerAnimation, ANIMATION } from "@/hooks/useStaggerAnimation";
import { allProjects } from "@/lib/data/projectData";

export default function Archive() {
  const router = useRouter();
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const { getTransition } = useStaggerAnimation({
    baseDelay: ANIMATION.BASE_DELAY,
  });
  const [selectedButton, setSelectedButton] = useState<string>("projects");
  const [headerText, setHeaderText] = useState("Hey, I'm Rajat.");

  // Group projects by year
  const projectsByYear = useMemo(() => {
    return allProjects.reduce(
      (acc, project) => {
        if (!acc[project.date]) {
          acc[project.date] = [];
        }
        acc[project.date].push(project);
        return acc;
      },
      {} as Record<string, typeof allProjects>
    );
  }, []);

  // Sort years in descending order
  const sortedYears = useMemo(() => {
    return Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));
  }, [projectsByYear]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setHeaderText(window.innerWidth <= 470 ? "Rajat." : "Hey, I'm Rajat.");
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
      <div className="flex flex-col gap-2 items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain
            headerText={headerText}
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
        </section>

        <div className="flex flex-col gap-4 items-start w-full mx-auto">
          <Breadcrumbs crumbs={[{ label: "ALL WORKS" }]} />

          <article className="w-full flex flex-col gap-[5rem]">
            <StaggerWrapper {...getTransition(0)}>
              <section className="flex flex-col gap-[3rem]">
                {sortedYears.map((year, yearIndex) => (
                  <div key={year} className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-lg text-secondary-color">{year}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {projectsByYear[year].map((project, projectIndex) => (
                        <StaggerWrapper
                          key={project.num}
                          {...getTransition(projectIndex + 1)}
                        >
                          <HoverEffectWrapper
                            id={project.num}
                            hoveredItem={hoveredItem}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="w-full"
                          >
                            <Link
                              href={`${project.href}?from=all-works`}
                              className="w-full"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="w-full relative overflow-hidden rounded-[0.375rem] inner-shadow-tertiary">
                                  <Image
                                    src={project.svgSrc}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <p className="b_mono text-lg">
                                    {project.title}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </HoverEffectWrapper>
                        </StaggerWrapper>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </StaggerWrapper>

            <StaggerWrapper
              {...getTransition(allProjects.length + 1)}
              className="w-full"
            >
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </StaggerWrapper>

            <StaggerWrapper
              {...getTransition(allProjects.length + 2)}
              className="w-full"
            >
              <Footer />
            </StaggerWrapper>
          </article>
        </div>
      </div>
    </main>
  );
}
