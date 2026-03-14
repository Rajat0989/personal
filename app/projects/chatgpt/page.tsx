"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Local data
import { allProjects } from "@/lib/data/projectData";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";

const SECTIONS = [
  { id: "Overview", label: "Overview" },
  { id: "Research", label: "Research" },
  { id: "Insights", label: "Insights" },
  { id: "Ideation", label: "Ideation" },
  { id: "Flow", label: "Flow" },
  { id: "Design", label: "Design" },
  { id: "Testing", label: "Testing" },
  { id: "Reflection", label: "Reflection" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

function scrollToSection(id: SectionId) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionNavLink({
  id,
  label,
  onSelect,
}: {
  id: SectionId;
  label: string;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className="font-azeret-mono text-md text-tertiary-color-dark hover:text-primary-color-dark text-left transition-colors"
    >
      {label}
    </button>
  );
}

function ProjectSection({
  id,
  children,
}: {
  id: SectionId;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 flex flex-col space-y-8"
    >
      <p className="font-azeret-mono text-md text-tertiary-color-dark uppercase tracking-tight">
        {id}
      </p>
      {children}
    </section>
  );
}

function ChatGPTContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";
  const crumbs = [{ label: "CHATGPT" }];

  const chatgptProject = allProjects.find(
    (project) => project.projectName === "ChatGPT",
  );

  return (
    <main className="page-container">
      <Breadcrumbs crumbs={crumbs} backTo={fromAllWorks ? "/archive" : "/"} />
      <div className="relative">
        <aside className="hidden lg:block absolute left-0 top-0">
          <div className="flex flex-col items-start gap-4 w-56">
            <nav
              aria-label="Section navigation"
              className="flex flex-col gap-2"
            >
              {SECTIONS.map((section) => (
                <SectionNavLink
                  key={section.id}
                  id={section.id}
                  label={section.label}
                  onSelect={scrollToSection}
                />
              ))}
            </nav>
          </div>
        </aside>

        {/* Centered content – add content directly in each section */}
        <div className="content-container w-full mx-auto">
          <section id="Overview">
            <h1>
              {chatgptProject?.title ??
                "Designing a Prompt Library for ChatGPT"}
            </h1>
          </section>
          <ProjectSection id="Research">
            <section className="flex flex-col space-y-2">
              <h2>What the internet was already saying</h2>
              <Image
                src="/images/chatgpt/desk.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color my-3"
              />
              <p>
                I spent time understanding how power users interact with ChatGPT
                daily — reading community discussions on Reddit and X, watching
                YouTube tutorials, exploring existing workarounds, and sizing
                the problem. The demand was visible at scale
              </p>
            </section>

            <section className="flex flex-col space-y-2">
              <h2>Turns out ChatGPT isn't the only one</h2>
              <Image
                src="/images/chatgpt/competitor.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color"
              />
            </section>
          </ProjectSection>
          <ProjectSection id="Insights">{/* Insights */}</ProjectSection>
          <ProjectSection id="Ideation"></ProjectSection>
          <ProjectSection id="Flow">
            <h2>
              Identifing the most intuitive way to bring this feature to life
            </h2>
            <Image
              src="/images/chatgpt/system.png"
              alt="ChatGPT's direct competitors"
              width={1200}
              height={600}
              className="w-full h-auto border border-tertiary-color"
            />
          </ProjectSection>
          <ProjectSection id="Design">{/* Design */}</ProjectSection>
          <ProjectSection id="Testing">{/* Testing */}</ProjectSection>
          <ProjectSection id="Reflection">{/* Reflection */}</ProjectSection>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function ChatGPT() {
  return (
    <Suspense fallback={null}>
      <ChatGPTContent />
    </Suspense>
  );
}
