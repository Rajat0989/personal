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

  useEffect(() => {
    setSelectedButton("home");
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
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-4 w-full">
          <HeaderMain
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <div className="flex flex-col w-full">
            <p className="font-azeret-mono tracking-tighter">
              Rajat is a designer who loves high quality visuals and
              interactions. He enjoys solving complex problems in creative ways
              while keeping users at the centre of every design decision.
            </p>
          </div>
        </section>

        <div className="w-full flex gap-5 flex-col">
          <h2>Selected Work</h2>
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {featuredProjects.map((project, index) => (
                <div key={`${project.year}-${project.num}`} className="w-full">
                  <Link href={project.href} className="w-full">
                    <div className="flex flex-col gap-2">
                      <div className="w-full">
                        <Image
                          src={project.svgSrc}
                          alt={project.title}
                          width={1200}
                          height={800}
                          className="w-full border border-tertiary-color rounded-md shadow-md"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <div className="w-full flex justify-center items-center">
            <Link href="/archive" className="w-fit">
              <Button
                variant="default"
                className="border border-tertiary-color font-azeret-mono rounded-[0.375rem] text-primary-color"
              >
                <span>VIEW ALL</span>
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default function Home() {
  return <Suspense fallback={null}>{<HomeContent />}</Suspense>;
}
