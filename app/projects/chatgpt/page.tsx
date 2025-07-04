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
      style={{
        // userSelect: "none",
        // WebkitUserSelect: "none",
        // msUserSelect: "none",
        // MozUserSelect: "none",
        // pointerEvents: "auto",
      }}
      // onCopy={(e) => e.preventDefault()}
      // onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />
        <article className="w-full flex flex-col gap-[5rem]">
          <section className="flex flex-col gap-3.5">
            <h1>
              Organizing ChatGPT conversations to unlock cumulative learning
            </h1>
            <p className="large">
              From April to June 2025 , as a self-initiated project, I
              designed intelligent organization features that help ChatGPT
              users leverage past conversations for future work instead of
              losing valuable content in endless chat lists.
            </p>
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
          </section>

          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Secondary Research</h2>
                <p className="large">
                  Secondary research across online forums, Reddit threads,
                  Twitter discussions, and user community feedback revealed
                  widespread complaints about ChatGPT's organization
                  capabilities. This validated that chat management frustrations
                  were universal rather than personal, confirming the problem
                  was worth investigating further.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/secondary_research.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Survey</h2>
                <p className="large">
                  A targeted survey with 29 ChatGPT users revealed that,
                </p>
                <p className="large">
                  → 64% of users regularly revisit old conversations for
                  reference
                  <br />
                  → 78% find it difficult to locate specific past chats
                  <br />→ 87% have lost useful prompts or responses they wanted
                  to reuse
                </p>
                <p className="large">
                  These metrics quantified the scope and impact of the chat
                  management problem.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Interview</h2>
                <p className="large">
                  In-depth interviews with 6 users uncovered the deeper context
                  behind these numbers, revealing inefficient workarounds and
                  productivity losses.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/interview.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Pain Points</h2>
                <p className="large">
                  Based on my research, I identified two critical pain points:
                </p>
                <p className="large">
                  → Users struggle to find past conversations because ChatGPT
                  provides no organizational structure.
                  <br />→ There's no way to save valuable prompts or responses
                  for future use.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Persona</h2>
                <p className="large">
                  Created a user persona based on the complete research process,
                  incorporating insights from problem discovery, user surveys,
                  user interviews, and identified pain points. By synthesizing
                  this data, the persona represents key user preferences,
                  behaviors, and frustrations, enabling more focused and
                  effective design decisions.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/persona.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Journey Map</h2>
                <p className="large">
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
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Problem & Goal</h2>
                <p className="large">
                  To define the problem, users struggle to manage important
                  chats and prompts leading to lost information, repeated work,
                  and unnecessary friction.
                </p>
                <p className="large">
                  And our goal is to make it easier for users to keep track of
                  important chats and prompts by giving them better ways to
                  organize and save the content that matters.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>HMW Questions</h2>
                <p className="large">
                  To explore potential solutions, I first developed "How Might
                  We" questions to avoid rushing into design decisions
                  prematurely.Starting with our core problem areas, I developed
                  HMW questions that would guide my design exploration:
                </p>
                <p className="large">
                  → How might we help users quickly locate valuable past
                  conversations?
                  <br />
                  → How might we enable intuitive organization without adding
                  complexity?
                  <br />→ How might we facilitate easy prompt saving and reuse?
                </p>
                <p className="large">
                  These questions kept my design process focused and
                  user-centered while exploring creative solutions.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Solution Exploration</h2>
                <p className="large">
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
                  to understand the current landscape.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/others.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <p className="large">
                  At the time, Perplexity AI was the only competitor with their
                  own solution for chat management called "Spaces," but it was
                  overly complicated due to custom context settings,
                  instructions, files, links and other chat configuration
                  options. Additionally, none of these platforms had a solution
                  for saving and reusing prompts.
                </p>
                <p className="large">
                  Based on this analysis, I developed three potential approaches
                  for improving ChatGPT's organization:
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>User Flow</h2>
                <p className="large">
                  With the solution approach defined and research insights
                  synthesized, crafted a user flow illustrating the various
                  paths users would take when navigating the new organizational
                  features, highlighting key scenarios like creating and
                  managing spaces and saving prompts they might encounter
                  throughout their ChatGPT experience.
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
                  Here are some of my initial thought processes regarding our
                  research and the goals for our redesign. The low-fidelity
                  designs provided us with the first glimpse of how ChatGPT's
                  organizational features could potentially work, with all the
                  key functionalities implemented.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {!isAuthenticated && (
            <section className="flex flex-col gap-2 items-start w-full border-tertiary-color border-[0.063rem] rounded-lg p-6 bg-white shadow-inset-tertiary">
              <div>
                <p className="large">
                  Above is a brief overview of my work. Please enter the
                  password to access the full case study.
                </p>
                <p className="text-secondary-color text-lg">
                  If you don't have the password, feel free to shoot me an
                  email{" "}
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
                  className="border border-tertiary-color rounded p-1 w-full"
                  placeholder="Password"
                  autoComplete="off"
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
                {error && <span className="text-red-500">{error}</span>}
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
