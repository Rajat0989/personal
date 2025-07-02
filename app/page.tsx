"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Local utilities and hooks
import { getFeaturedProjects } from "@/lib/data/projectData";
import { useHoverEffect } from "@/hooks/useHoverEffect";

// Local components
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";
import { HoverEffectWrapper } from "@/components/hoverEffectWrapper";
import { StaggerWrapper } from "@/components/staggerWrapper";

// Local utilities and hooks
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { ANIMATION } from "@/hooks/useStaggerAnimation";

// Static assets
import ArrowRight from "/public/images/icons/arrow-right.svg";

function HomeContent() {
  const projectData = getFeaturedProjects();
  const years = Object.keys(projectData).sort((a, b) => Number(b) - Number(a));

  // Get featured projects in a flat array
  const featuredProjects = years.flatMap((year) =>
    projectData[year].map((project) => ({
      ...project,
      year,
    }))
  );

  const [selectedButton, setSelectedButton] = useState<string>("home");
  const router = useRouter();
  const [headerText, setHeaderText] = useState("Hey, I'm Rajat.");
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const { getTransition } = useStaggerAnimation({
    baseDelay: ANIMATION.BASE_DELAY,
  });

  useEffect(() => {
    setSelectedButton("home");
  }, []);

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
      case "projects":
        router.push("/archive");
        break;
      case "about":
        router.push("/about");
        break;
    }
  };

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-2 items-center w-full">
        {/* Introduction Section */}
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain
            headerText={headerText}
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />

          <div className="flex flex-col gap-2 w-full">
            <p className="b_mono">
              I craft seamless interfaces, obsessing over the simplest solutions
              that leave room for taste. Previously, I was at{" "}
              <span className="group">
                <a
                  href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate"
                  className="link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <sup className="inline-flex">
                  <Image
                    src="/images/icons/link.svg"
                    width={5}
                    height={5}
                    alt=""
                    className="ml-[0.15rem] transition-transform duration-300 ease-in-out group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
                  />
                </sup>
              </span>{" "}
              reimagining the future of generative AI ads. In my past life, I
              engineered insulin delivery pods at{" "}
              <span className="group">
                <a
                  href="https://www.bd.com/en-us"
                  className="link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Becton Dickinson & Co
                </a>
                <sup className="inline-flex">
                  <Image
                    src="/images/icons/link.svg"
                    width={5}
                    height={5}
                    alt=""
                    className="ml-[0.15rem] transition-transform duration-300 ease-in-out group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
                  />
                </sup>
              </span>
              .
            </p>
            <p className="b_mono">
              Besides design, you'll find me shooting analog{" "}
              <span className="group">
                <Link
                  href="https://vs.co/l4rt9tds"
                  className="link-underline"
                  aria-label="My photography on Twitter"
                >
                  photography
                </Link>
                <sup className="inline-flex">
                  <Image
                    src="/images/icons/link.svg"
                    width={5}
                    height={5}
                    alt=""
                    className="ml-[0.15rem] transition-transform duration-300 ease-in-out group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
                  />
                </sup>
              </span>
              , although I still reach for digital sometimes. I also enjoy
              writing sporadically and doom-scrolling{" "}
              <span className="group">
                <a
                  href="https://twitter.com/robertkkan"
                  className="link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <sup className="inline-flex">
                  <Image
                    src="/images/icons/link.svg"
                    width={5}
                    height={5}
                    alt=""
                    className="ml-[0.15rem] transition-transform duration-300 ease-in-out group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
                  />
                </sup>
              </span>{" "}
              a bit too much.
            </p>
          </div>
        </section>

        <div className="w-full flex flex-col gap-2">
          <h2>Selected Work</h2>
          {/* Projects Grid */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {featuredProjects.map((project, index) => (
                <StaggerWrapper
                  key={`${project.year}-${project.num}`}
                  {...getTransition(index)}
                >
                  <HoverEffectWrapper
                    id={`${project.year}-${project.num}`}
                    hoveredItem={hoveredItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-full"
                  >
                    <Link href={project.href} className="w-full">
                      <div className="flex flex-col gap-2">
                        <div className="w-full relative overflow-hidden rounded-[0.375rem] inner-shadow-tertiary">
                          <Image
                            src={project.svgSrc}
                            alt={project.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="b_mono text-xl">
                            {project.title}
                          </p>
                          <p className="text-sm text-secondary-color">
                            {project.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </HoverEffectWrapper>
                </StaggerWrapper>
              ))}
            </div>

            <div className="w-full mt-8 flex justify-center">
              <HoverEffectWrapper
                id="view-all"
                hoveredItem={hoveredItem}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-fit"
              >
                <Link href="/archive" className="w-fit">
                  <Button
                    variant="default"
                    className="flex items-center justify-between gap-2 px-6 py-[0.35rem] rounded-[0.375rem] text-primary-color"
                  >
                    <span>VIEW ALL</span>
                    <ArrowRight className="w-3 h-3 text-secondary-color transition-colors duration-400 ease-in-out" />
                  </Button>
                </Link>
              </HoverEffectWrapper>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
