"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";

function ChatGPTContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "CHATGPT" }]
    : [{ label: "CHATGPT" }];

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
        <Breadcrumbs
          crumbs={crumbs}
          backTo={fromAllWorks ? "/archive" : "/"}
        />
        <article className="w-full flex flex-col gap-[4rem]">
          <section className="flex flex-col gap-3.5">
            <h2>
              Designing organization and collaboration features for ChatGPT
            </h2>
            <p>
              From February to April 2025 , as a self-initiated project, I
              designed intelligent organization and collaboration features that
              transforms ChatGPT from a disposable chat tool into a persistent
              knowledge platform.
            </p>
            <div className="w-full">
              <Image
                src="/images/chatgpt/main.png"
                alt="ChatGPT main interface"
                width={1200}
                height={675}
                className="border border-tertiary-color rounded-md shadow-md p-2"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </section>

             <section className="flex flex-col gap-4">
                <h3>Understanding the Problem</h3>
                <p>
                  After using ChatGPT almost daily for several months, I began
                  to notice recurring frustrations that went beyond just my own
                  workflow.
                </p>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center w-full gap-4">
                    <p className="">
                      Important conversations, breakthrough ideas, and valuable
                      prompts were getting buried in an endless list of chats.
                      Finding something useful even from just a week ago became
                      increasingly difficult and time consuming.
                    </p>
                    <p>
                      ChatGPT's collaboration limitations were equally
                      frustrating. We'd end up sharing individual chat links and
                      screenshots through email or WhatsApp, but couldn't work
                      together in real-time or build shared knowledge bases.
                    </p>
                  </div>
                </div>
              </section>
             <section className="flex flex-col gap-4">
                <h3>User Survey</h3>
                <p>
                  To quantify the problem and validate my observations, I
                  conducted a targeted survey with 29 ChatGPT users, focusing
                  specifically on chat usage, management behaviors, and
                  collaboration patterns.
                </p>
                <div className="w-full flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-2/5 h-full">
                    <Image
                      src="/images/chatgpt/squestions.png"
                      alt="ChatGPT main interface"
                      width={1200}
                      height={675}
                      className="border border-tertiary-color rounded-md"
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  </div>
                  <div className="sm:w-3/5 flex flex-col gap-2 justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <p>
                        <span className="text-2xl font-medium">68%</span> of
                        users regularly revisit old conversations for reference
                      </p>
                      <p>
                        <span className="text-2xl font-medium">72%</span> find
                        it difficult to locate specific past chats
                      </p>
                      <p>
                        <span className="text-2xl font-medium">62%</span> have
                        lost useful prompts or responses they wanted to reuse
                      </p>
                      <p>
                        <span className="text-2xl font-medium">59%</span> are
                        frustrated due to lack of collaboration feature inside
                        ChatGPT
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  These numbers confirmed that problems were widespread,
                  impactful, and interconnected.
                </p>
              </section>
             <section className="flex flex-col gap-4">
                <h3>User Interview</h3>
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <p className="sm:w-1/3">
                    Following the survey, I conducted deeper interviews with 8
                    users representing different demographics and use cases to
                    gain richer insights into their specific challenges.
                  </p>
                  <div className="sm:w-2/3">
                    <Image
                      src="/images/chatgpt/iquestions.png"
                      alt="ChatGPT main interface"
                      width={1200}
                      height={675}
                      className="border border-tertiary-color rounded-mdp-2"
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  </div>
                </div>
                <div className="">
                  <Image
                    src="/images/chatgpt/map.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
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
                    className="border border-tertiary-color rounded-md p-2"
                    priority
                  />
                </div>
              </section>
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
                    className="border border-tertiary-color rounded-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
             <section className="flex flex-col gap-4">
                <h3>Pain Points, Problem & Goal</h3>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/pppg.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
             <section className="flex flex-col gap-4">
                <h3>Solution Exploration</h3>
                <p>
                  To explore potential solutions, I developed "How Might We"
                  questions to avoid rushing into design decisions prematurely
                  and ensure I was thinking broadly about the problem space.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/hmw.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <p>
                  These questions kept my design process focused and
                  user-centered while exploring creative solutions.
                </p>
                <p>
                  I analyzed how competitors were handling chat organization. I
                  looked at{" "}
                  <a
                    href="https://gemini.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Google's Gemini
                  </a>
                  ,{" "}
                  <a
                    href="https://grok.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    X's (Twitter's) Grok
                  </a>
                  ,{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Anthropic's Claude
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
                    src="/images/chatgpt/competitors.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <p>
                  At the time, Perplexity AI was the only competitor with their
                  own solution for chat management called "Spaces."
                  Additionally, none of these platforms had a solution for
                  saving prompts and collaboration.
                </p>
                <p>
                  I also examined how users currently manage similar content in
                  other platforms.For prompt saving and organization, I studied{" "}
                  <a
                    href="https://docs.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Google Docs
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.notion.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Notion
                  </a>{" "}
                  to understand how people structure and retrieve valuable
                  content.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/save.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <p>
                  For collaboration and organization patterns, I analyzed{" "}
                  <a
                    href="https://classroom.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Google Classroom
                  </a>
                  {", "}
                  <a
                    href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Microsoft Teams
                  </a>
                  {", "}
                  <a
                    href="https://slack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Slack
                  </a>
                  {" and "}
                  <a
                    href="https://www.bitrix24.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Bitrix24
                  </a>
                  {" to see how"}
                  teams effectively share resources and work together in digital
                  spaces.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/collab.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
             <section className="flex flex-col gap-4">
                <h3>User Flow</h3>
                <p>
                  I crafted a user flow illustrating the various paths users
                  would take when navigating the new organization and
                  collaboration features, highlighting key scenarios like
                  creating and managing spaces, saving prompts, and
                  collaborating with team members across their ChatGPT workflow.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/userflow.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
             <section className="flex flex-col gap-4">
                <h3>Wireframes</h3>
                <p>
                  Here are some of the wireframes that provided us with the
                  glimpse of how ChatGPT's organization and collaboration
                  features could potentially work, with all the key
                  functionalities implemented.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/chatgpt/wireframes.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    className="border border-tertiary-color rounded-md p-2"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </section>
          {/* {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>Final Design</h3>
              </section>
            </>
          )} */}

          {/* {isAuthenticated && (
            <>
              <section className="flex flex-col gap-4">
                <h3>User Testing and Results</h3>
                <p>
                  To validate the solution's effectiveness, I conducted user
                  testing with the final design and prototype.
                </p>
                <ul>
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
             <section className="flex flex-col gap-4">
                <h3>Learnings and Reflections</h3>
                <ul>
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

             <section className="flex flex-col gap-4">
                <h3>More coming soon .......</h3>
              </section>
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
    <Suspense fallback={null}>
      <ChatGPTContent />
    </Suspense>
  );
}
