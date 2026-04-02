"use client";

import React, { Suspense, useEffect, useState } from "react";
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
  activeId,
}: {
  id: SectionId;
  label: string;
  onSelect: (id: SectionId) => void;
  activeId: SectionId | null;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`font-azeret-mono text-base text-left transition-colors px-2 rounded-md ${
        activeId === id
          ? "text-primary-color-dark text-md"
          : "text-tertiary-color-dark hover:text-primary-color-dark"
      }`}
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
    <section id={id} className="scroll-mt-24 flex flex-col py-3">
      {children}
    </section>
  );
}

function ChatGPTContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";
  const crumbs = [{ label: "CHATGPT" }];

  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const chatgptProject = allProjects.find(
    (project) => project.projectName === "ChatGPT",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Centered shell: nav + article read as one block, not pinned to viewport left */}
      <div className="mx-auto w-full max-w-[72rem] px-4 sm:px-6 xl:px-8">
        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-10">
          {/* Desktop: sticky breadcrumbs + section nav (beside centered article column) */}
          <aside className="hidden xl:flex w-56 shrink-0 flex-col gap-4 self-start sticky top-0">
            <Breadcrumbs
              crumbs={crumbs}
              backTo={fromAllWorks ? "/archive" : "/"}
            />
            <nav aria-label="Section navigation" className="flex flex-col gap-2">
              {SECTIONS.map((section) => (
                <SectionNavLink
                  key={section.id}
                  id={section.id}
                  label={section.label}
                  onSelect={scrollToSection}
                  activeId={activeSection}
                />
              ))}
            </nav>
          </aside>

          <div className="min-w-0 w-full max-w-[48rem] xl:mx-0">
          {/* Mobile / tablet: breadcrumbs in normal flow */}
          <div className="xl:hidden mb-4">
            <Breadcrumbs
              crumbs={crumbs}
              backTo={fromAllWorks ? "/archive" : "/"}
            />
          </div>
          <h1>{chatgptProject?.title ?? "Prompt Library for ChatGPT"}</h1>
          <ProjectSection id="Overview"></ProjectSection>

          <ProjectSection id="Research">
            <div className="py-8">
              <h2>
                Understanding the Problem Space Through Online Discussions and
                Existing Content
              </h2>
              <Image
                src="/images/chatgpt/desk.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color mt-2 mb-5"
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium reiciendis laborum at sint nisi sit dignissimos
                ipsam, nulla distinctio fugiat, assumenda veniam voluptas totam
                natus in nesciunt doloribus optio. Nostrum mollitia, tempore
                amet aliquid doloremque, corporis iste numquam facilis quibusdam
              </p>
            </div>

            <div className="py-8">
              <h2>
                Understanding Patterns and Gaps Across Competing Solutions
              </h2>
              <Image
                src="/images/chatgpt/competitors.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color mt-2 mb-5"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                tenetur, fugit, eius explicabo expedita quod sint ex adipisci
                nulla cum libero a. Quo vero asperiores dolore nisi, repellat
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2>
                Combining User Interviews and Observation to Uncover Deeper
                Insights
              </h2>
              
            </div>
          </ProjectSection>

          <ProjectSection id="Insights">
            <div className="flex flex-col gap-2">
              <h2>
                Connecting the Dots Across Research to Identify Opportunities
              </h2>
              <Image
                src="/images/chatgpt/synthesis.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2>Key Insights</h2>
            </div>
          </ProjectSection>

          <ProjectSection id="Ideation">
            <div className="flex flex-col gap-2">
              <h2>Exploring a Wide Range of Ideas</h2>
            </div>
          </ProjectSection>

          <ProjectSection id="Flow">
            <div className="flex flex-col gap-3">
              <h2>
                Identifing the Most Intuitive Way to Bring this Feature to Life
              </h2>
              <Image
                src="/images/chatgpt/system.png"
                alt="ChatGPT's direct competitors"
                width={1200}
                height={600}
                className="w-full h-auto border border-tertiary-color"
              />
            </div>
          </ProjectSection>
          <ProjectSection id="Design">{/* Design */}</ProjectSection>
          <ProjectSection id="Testing">
            <div className="flex flex-col gap-3">
              <h2>Testing the Solution With Users</h2>
            </div>
          </ProjectSection>
          <ProjectSection id="Reflection">
            <div className="flex flex-col gap-3">
              <h2>What I Learned</h2>
            </div>
          </ProjectSection>
        </div>
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
