"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

// Local utilities and hooks
import { useStaggerAnimation, ANIMATION } from "@/hooks/useStaggerAnimation";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/hobby/image.png",
    alt: "Urban landscape captured in black and white film",
  },
  {
    src: "/images/hobby/image copy.png",
    alt: "Architectural details of a historic building",
  },
  {
    src: "/images/hobby/image copy 2.png",
    alt: "Street photography moment in the city",
  },
  {
    src: "/images/hobby/image copy 3.png",
    alt: "Abstract composition of city elements",
  },
  {
    src: "/images/hobby/image copy 4.png",
    alt: "Portrait of urban life through analog lens",
  },
];

function AboutContent() {
  const router = useRouter();
  const { getTransition } = useStaggerAnimation({
    baseDelay: ANIMATION.BASE_DELAY,
  });
  const crumbs = [{ label: "ABOUT ME" }];
  const [selectedButton, setSelectedButton] = useState<string>("about");
  const [headerText, setHeaderText] = useState("Hey, I'm Rajat.");

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setHeaderText(window.innerWidth <= 470 ? "Rajat." : "Hey, I'm Rajat.");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    switch (buttonName) {
      case "home":
        router.push("/");
        break;
      case "projects":
        router.push("/archive");
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
          <Breadcrumbs crumbs={crumbs} />

          <article className="w-full flex flex-col gap-[5rem]">
            <section className="flex flex-col gap-[1.5rem]">
              {/* Text Section */}
              <div className="flex flex-col gap-[0.75rem]">
                <p className="commit-mono">
                  I'm a UX designer and final-year Computer Science student
                  based in Mumbai, passionate about creating meaningful digital
                  experiences that put users at the heart of every design
                  decision.
                </p>
                <p className="commit-mono">
                  My love for design began early in childhood, naturally drawn
                  to creative expression through drawing and painting. These
                  early experiences shaped my ability to notice subtle details
                  and understand how visual elements influence emotions and
                  perceptions.
                </p>
                <p className="commit-mono">
                  During my engineering journey at university, I explored
                  various domains including web development, machine learning,
                  and DevOps, focusing intensively on frontend development for
                  nearly a year. However, while my peers concentrated on code
                  performance and features, I found myself constantly
                  questioning design decisions and thinking about user
                  interactions. This led me to discover UX design, which felt
                  like finding the missing piece of a puzzle. Since then, I've
                  been continuously improving my skills through hands-on
                  projects, learning from user feedback, and staying updated
                  with design trends and methodologies.
                </p>
                <p className="commit-mono">
                  My goal as a UX designer is to create digital experiences that
                  feel natural and intuitive, making complex systems simple and
                  ensuring technology enhances rather than complicates our daily
                  lives.
                </p>
              </div>
            </section>
          </article>

          <Footer />
        </div>
      </div>
    </main>
  );
}

export default function About() {
  return (
    <Suspense fallback={null}>
      <AboutContent />
    </Suspense>
  );
}
