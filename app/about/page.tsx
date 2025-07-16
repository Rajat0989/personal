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
                As a final-year Computer Science student, I've come to
                understand that the most profound digital experiences emerge at
                the intersection of technical rigor and human-centered design
                philosophy. My formative years were marked by a deep fascination
                with artistic expressions. I distinguished myself in drawing and
                painting throughout my academic tenure, earning recognition
                through numerous competitive achievements.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                My first year of college was a whirlwind of exploration. I dove
                headfirst into competitive coding, wrestling with data
                structures and algorithms, building full-stack applications,
                experimenting with AI and ML models, and configuring DevOps
                pipelines. I was determined to find my niche in the vast
                landscape of computer science.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                In my second year, I immersed myself in frontend development,
                mastering frameworks and perfecting responsive layouts. But
                while my peers were captivated by optimizing algorithms and
                architecting elegant backend solutions, I found myself asking
                fundamentally different questions:{" "}
                <span className="italic">
                  How will someone navigate this interface intuitively? What
                  happens when a stressed user needs to complete this task in
                  seconds? Why does clicking this button feel so unsatisfying?
                </span>
              </p>
              <p className="font-azeret-mono tracking-tighter">
                That's when UI/UX design didn't just click, it exploded into
                clarity. I realized I'd been doing user experience thinking all
                along; I just didn't know it had a name. I immersed myself in
                design principles, studying the psychology behind user behavior
                and learning about design laws. I began experimenting with
                design software. Each new concept felt like finding missing
                pieces of a puzzle I'd been unconsciously trying to solve.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                I'm driven by the belief that thoughtful design can make
                technology more human. My goal is to create digital experiences
                that don't just function well, but feel meaningful bridging the
                gap between what's technically possible and what's genuinely
                accessible for everyone.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                When not crafting digital experiences, I find myself drawn to a
                diverse array of passions: experimenting with flavors in the
                kitchen, competing in intense badminton games, and capturing
                moments through both photography and videography.
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
