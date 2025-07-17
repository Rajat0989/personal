"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

function ChatGPTContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chatgpt_case_study_access");
      if (stored === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "CHATGPT" }]
    : [{ label: "CHATGPT" }];

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.trim() === "RAM") {
      setIsAuthenticated(true);
      setError("");
      if (typeof window !== "undefined") {
        localStorage.setItem("chatgpt_case_study_access", "true");
      }
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <main
      className="page-container page-container-default project-page"
      style={
        {
          // userSelect: "none",
          // WebkitUserSelect: "none",
          // msUserSelect: "none",
          // MozUserSelect: "none",
          // pointerEvents: "auto",
        }
      }
      // onCopy={(e) => e.preventDefault()}
      // onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />
        <article className="w-full flex flex-col gap-[4rem]">
          <section className="flex flex-col gap-3.5">
            <h2>
              Designing organization and collaboration features for ChatGPT
            </h2>
            <div className="w-full border rounded-[0.375rem]">
              <Image
                src="/images/chatgpt/main.png"
                alt="ChatGPT main interface"
                width={1200}
                height={675}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <p className="text-large">
              From February to April 2025 , as a self-initiated project, I
              designed intelligent organization and collaboration features that
              transforms ChatGPT from a disposable chat tool into a persistent
              knowledge platform.
            </p>
          </section>

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Understanding the Problem</h3>
                <p>
                  After several months of using ChatGPT almost daily, I started
                  noticing frustrating patterns that extended beyond my personal
                  workflow.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
                  <p className="md:col-span-21 h-full flex flex-col justify-center">
                    Important conversations, breakthrough ideas, and valuable
                    prompts were getting buried in an endless list of chats.
                    Finding something useful even from just a week ago became
                    increasingly difficult and time consuming.
                  </p>
                  <div className="md:col-span-3">
                    <video
                      src="/video/problem.mp4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="max-w-full object-cover border border-tertiary-color rounded-md shadow-md"
                      style={{ minWidth: "240px", minHeight: "180px" }}
                    ></video>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-2">
                    <Image
                      src="/images/chatgpt/share.png"
                      alt="ChatGPT main interface"
                      width={1200}
                      height={675}
                      style={{ width: "100%", height: "auto" }}
                      className="border border-tertiary-color rounded-md shadow-md"
                      priority
                    />
                  </div>
                  <p className="md:col-span-2 h-full flex flex-col justify-center">
                    ChatGPT's collaboration limitations were equally
                    frustrating. We'd end up sharing individual chat screenshots
                    through email or WhatsApp, but couldn't work together in
                    real-time or build shared knowledge bases.
                  </p>
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>User Survey</h3>
                <p>
                  To quantify the problem and validate my observations, I
                  conducted a targeted survey with 29 ChatGPT users, focusing
                  specifically on chat usage, management behaviors, and
                  collaboration patterns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border border-tertiary-color rounded-lg p-4 shadow-md">
                  <p>
                    <span className="text-2xl">68%</span> of users regularly
                    revisit old conversations for reference
                  </p>
                  <p>
                    <span className="text-2xl">72%</span> find it difficult to
                    locate specific past chats
                  </p>
                  <p>
                    <span className="text-2xl">62%</span> have lost useful
                    prompts or responses they wanted to reuse
                  </p>
                  <p>
                    <span className="text-2xl">59%</span> are frustrated due to
                    lack of collaboration feature inside ChatGPT
                  </p>
                </div>
                <p>
                  These numbers confirmed that problems were widespread,
                  impactful, and interconnected.
                </p>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>User Interview</h3>
                <p>
                  Following the survey, I conducted deeper interviews with 8
                  users representing different demographics and use cases to
                  gain richer insights into their specific challenges.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/map.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md shadow-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Persona</h3>
                <p>
                  Based on my research findings, I created a primary persona
                  that represents the segment that relies heavily on ChatGPT.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/persona.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    className="border border-tertiary-color rounded-md shadow-md p-2"
                    priority
                  />
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>User Journey Map</h3>
                <p>
                  Mapped the user's complete interaction cycle with ChatGPT to
                  understand their end-to-end experience, emotions, and pain
                  points at each stage. This revealed critical moments of
                  frustration and identified specific opportunities where design
                  interventions could improve the workflow and reduce user
                  friction.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/journey.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md shadow-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Pain Points</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border border-tertiary-color p-4 rounded-md shadow-md">
                  <p className="bg-[#dc3b2215] p-2 rounded-sm border border-[#dc3b22] text-primary-color">
                    Users struggle to find past conversations because ChatGPT
                    provides no organizational structure.
                  </p>
                  <p className="bg-[#dc3b2215] p-2 rounded-sm border border-[#dc3b22] text-primary-color">
                    There's no way to save valuable prompts or responses for
                    future use.
                  </p>
                  <p className="bg-[#dc3b2215] p-2 rounded-sm border border-[#dc3b22] text-primary-color">
                    ChatGPT only allows sharing individual chats, making team
                    collaboration difficult.
                  </p>
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Problem & Goal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border border-tertiary-color p-6 rounded-md shadow-md">
                  <p>
                    To define the{" "}
                    <span className="text-[#DC3C22] font-medium">problem</span>,
                    users struggle to manage important chats and prompts leading
                    to lost information, repeated work, and unnecessary
                    friction.
                  </p>
                  <p>
                    And our{" "}
                    <span className="text-[#06923E] font-medium">goal</span> is
                    to make it easier for users to keep track of important chats
                    and prompts by giving them better ways to organize and save
                    the content that matters.
                  </p>
                </div>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Solution Exploration</h3>
                <p>
                  To explore potential solutions, I developed "How Might We"
                  questions to avoid rushing into design decisions prematurely
                  and ensure I was thinking broadly about the problem space.
                </p>
                <p>
                  → How might we help users quickly locate valuable past
                  conversations?
                  <br />
                  → How might we enable intuitive organization without adding
                  complexity?
                  <br />→ How might we facilitate easy prompt saving and reuse?
                  <br />→ How might we enable seamless collaboration for teams?
                </p>
                <p>
                  These questions kept my design process focused and
                  user-centered while exploring creative solutions.
                </p>
                <p>
                  I explored several approaches and also analyzed how
                  competitors were handling chat organization. I looked at
                  Google's{" "}
                  <a
                    href="https://gemini.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Gemini
                  </a>
                  , X's (Twitter's){" "}
                  <a
                    href="https://grok.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Grok
                  </a>
                  , Anthropic's{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Claude
                  </a>
                  , and{" "}
                  <a
                    href="https://perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Perplexity AI
                  </a>{" "}
                  to understand the current landscape. At the time, Perplexity
                  AI was the only competitor with their own solution for chat
                  management called "Spaces." Additionally, none of these
                  platforms had a solution for saving and reusing prompts,
                  collaboration.
                </p>
                <p>
                  Based on this analysis, I developed three potential approaches
                  for improving ChatGPT's organization:
                </p>
              </section>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>More coming soon........</h3>
              </section>
            </>
          )}

          {/* {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Flow</h2>
                <p className="large">
                  I crafted a user flow illustrating the various paths users
                  would take when navigating the new organization and
                  collaboration features, highlighting key scenarios like
                  creating and managing spaces, saving prompts, and
                  collaborating with team members across their ChatGPT workflow.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Wireframe</h2>
                <p className="large">
                  Here are some of the wireframes that provided us with the
                  glimpse of how ChatGPT's organization and collaboration
                  features could potentially work, with all the key
                  functionalities implemented.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Final Design</h2>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Testing and Results</h2>
                <p className="large">
                  To validate the solution's effectiveness, I conducted user
                  testing with the final design and prototype.
                </p>
                <ul className="large">
                  <li>
                    • 9 out of 10 users found the folder-based organization very
                    intuitive and preferred it over the current linear chat
                    list.
                  </li>
                  <li>
                    • 8 out of 10 users successfully organized their
                    conversations within 2 minutes without guidance,
                    demonstrating the intuitive nature of the folder-based
                    system.
                  </li>
                  <li>
                    • Users immediately understood the collaborative spaces
                    concept and expressed excitement about team features.
                  </li>
                  <li>
                    • Participants successfully saved and retrieved prompts much
                    faster than their current external tool workflows.
                  </li>
                  <li>
                    • Users described the design as "clean," "familiar," and
                    "feels like it belongs in ChatGPT."
                  </li>
                </ul>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Learnings and Reflections</h2>
                <ul className="large">
                  <li>
                    The interview process was a huge confidence booster for
                    me—getting the chance to talk with people gave me valuable
                    experience in conducting user interviews. I learned how to
                    make participants comfortable, ask the right follow-up
                    questions, and observe non-verbal cues that often revealed
                    more than what people explicitly said.
                  </li>
                  <li>
                    Not ignoring the research phase was crucial—it helped me
                    make informed decisions throughout the design process rather
                    than relying on gut feelings. Having solid research backing
                    gave me confidence in every design decision because I could
                    always point back to specific user insights and data that
                    supported my choices.
                  </li>
                  <li>
                    It's important to include users in the ideation phase, not
                    just during research—I realized that getting user
                    perspectives during the design process itself can lead to
                    better solutions. Rather than waiting until the end to
                    validate designs, involving users throughout ideation allows
                    for continuous iteration and ensures the final solution
                    truly meets their needs along the way.
                  </li>
                </ul>
              </section>
            </>
          )} */}

          {!isAuthenticated && (
            <section className="flex flex-col gap-2 items-start w-full border-tertiary-color border-[0.063rem] rounded-lg p-6 bg-white shadow-inset-tertiary">
              <div>
                <p className="font-azeret-mono tracking-tight">
                  Above is a brief overview of my work. Please enter the
                  password to access the full case study.
                </p>
                <p className="text-secondary-color font-azeret-mono tracking-tight text-sm">
                  If you don't have the password, feel free to shoot me an email{" "}
                  <a
                    href="mailto:rajatchandarana09@gmail.com"
                    className="link-underline"
                  >
                    here
                  </a>
                </p>
              </div>
              <form
                onSubmit={handlePasswordSubmit}
                className="flex flex-col gap-1 w-full"
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-tertiary-color rounded px-2 py-1 w-full font-azeret-mono"
                  placeholder="Password"
                  autoComplete="off"
                />
                <Button type="submit" className="w-full font-azeret-mono">
                  Submit
                </Button>
                {error && (
                  <span className="text-red-500 font-azeret-mono">{error}</span>
                )}
              </form>
            </section>
          )}

          <section>
            <Footer />
          </section>
        </article>
      </div>
    </main>
  );
}

export default function ChatGPT() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatGPTContent />
    </Suspense>
  );
}
