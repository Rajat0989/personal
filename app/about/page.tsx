"use client";

import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

function AboutContent() {
  const router = useRouter();
  const crumbs = [{ label: "ABOUT ME" }];
  const [selectedButton, setSelectedButton] = useState<string>("about");

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
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
        </section>

        <div className="flex flex-col gap-[2.5rem] items-start w-full mx-auto">
          <Breadcrumbs crumbs={crumbs} />

          <article className="w-full">
            <section className="flex flex-col gap-2">
              <p className="font-azeret-mono tracking-tighter">
                I am a final-year Computer Science student who loves
                high-quality visual and interaction design.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                Growing up, I was naturally drawn to understanding how things
                worked and looked. This curiosity about both form and function
                laid the foundation for my love of design.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                In university, I design as the perfect intersection of my
                technical background and creative aspirations. My journey began
                with exploring how beautiful interfaces could solve real
                problems, developing empathy for users, and mastering design
                processes that prioritize both form and function.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                Outside of design, I enjoy cooking and playing badminton. These
                pursuits keep me grounded and energized.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                I'm excited to create digital experiences that are both
                beautiful and meaningful, making technology more intuitive and
                accessible for everyone.
              </p>
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
