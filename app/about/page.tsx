"use client";

import React from "react";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

function AboutContent() {
  const crumbs = [{ label: "ABOUT ME" }];

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-2 items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain />
        </section>

        <div className="flex flex-col gap-[2.5rem] items-start w-full mx-auto">
          <Breadcrumbs crumbs={crumbs} />

          <article className="w-full">
            <section className="flex flex-col gap-2">
              <p className="font-azeret-mono tracking-tighter">
                I am a student at University of Mumbai studying Computer
                Engineering. Growing up, I was deeply immersed in the arts,
                whether it was sketching, painting, or exploring visual
                storytelling. This early love for creativity shaped how I see
                and solve problems today.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                In college, I explored everything from Competitive coding,
                Full-stack development, Machine Learning, DevOps, etc. But while
                my peers focused on optimising algorithms, I obsessed over how
                it feels when someone flows through an interface, how a click
                responds, etc.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                That curiosity led me to discover UX design, where my technical
                background and creative instincts finally made sense together. I
                immersed myself in user psychology, design principles, and
                interaction patterns, discovering a space where logic and
                creativity coexist.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                Today, I focus on creating experiences that feel intuitive and
                human. For me, good design isn't about adding more; it's about
                removing friction and making complex things simple.
              </p>
              <p className="font-azeret-mono tracking-tighter">
                When I'm not designing, you'll find me experimenting in the
                kitchen, playing badminton, sketching, and taking photographs.
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
  return <AboutContent />;
}
