"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Local utilities and hooks
import { getFeaturedProjects } from "@/lib/data/projectData";

// Local components
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

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
    <main className="">
      <div className="h-screen flex justify-center items-end">
        <Image src="/images/me.png" alt="" width={325} height={400} />
      </div>

      {/* <div className="flex flex-col gap-[3rem] items-center w-full">
        <section className="flex flex-col gap-1.5 w-full">
          <HeaderMain
            headerText={headerText}
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <div className="flex flex-col w-full">
            <p className="large commit-mono tracking-tighter">
              Rajat is a designer who loves high quality visuals and
              interactions. He enjoys solving complex problems in creative ways
              while keeping users at the centre of every design decision.
            </p>
          </div>
        </section>

        <div className="w-full flex gap-[1.5rem] flex-col">
          <h2>Selected Work</h2>
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {featuredProjects.map((project, index) => (
                <div key={`${project.year}-${project.num}`} className="w-full">
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
                        <p className="commit-mono text-xl">{project.title}</p>
                        <p className="text-sm text-secondary-color">
                          {project.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full flex justify-center">
          <Link href="/archive" className="w-fit">
            <Button
              variant="default"
              className="flex items-center justify-between gap-2 px-6 py-[0.35rem] rounded-[0.375rem] text-primary-color"
            >
              <span>VIEW ALL</span>
              <Image
                src="/images/icons/arrow-right.svg"
                alt="Arrow Right"
                width={12}
                height={12}
                className="w-3 h-3 text-secondary-color transition-colors duration-400 ease-in-out"
              />
            </Button>
          </Link>
        </div>

        <Footer />
      </div>*/}
    </main>
  );
}

export default function Home() {
  return <Suspense fallback={null}>{<HomeContent />}</Suspense>;
}
