// "use client";

// import React, { Suspense, useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";

// // Local components
// import Breadcrumbs from "@/components/ui/breadcrumbs";
// import Footer from "@/components/ui/footer";
// import { Button } from "@/components/ui/button";

// function ChatGPTContent() {
//   const searchParams = useSearchParams();
//   const fromAllWorks = searchParams.get("from") === "all-works";

//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const stored = localStorage.getItem("chatgpt_case_study_access");
//       if (stored === "true") {
//         setIsAuthenticated(true);
//       }
//     }
//   }, []);

//   const crumbs = fromAllWorks
//     ? [{ label: "ALL WORKS", href: "/archive" }, { label: "CHATGPT" }]
//     : [{ label: "CHATGPT" }];

//   function handlePasswordSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (password.trim() === "RAM") {
//       setIsAuthenticated(true);
//       setError("");
//       if (typeof window !== "undefined") {
//         localStorage.setItem("chatgpt_case_study_access", "true");
//       }
//     } else {
//       setError("Incorrect password. Please try again.");
//     }
//   }

//   return (
//     <main
//       className="page-container page-container-default project-page"
//       style={
//         {
//           // userSelect: "none",
//           // WebkitUserSelect: "none",
//           // msUserSelect: "none",
//           // MozUserSelect: "none",
//           // pointerEvents: "auto",
//         }
//       }
//       // onCopy={(e) => e.preventDefault()}
//       // onContextMenu={(e) => e.preventDefault()}
//     >
//       <div className="flex flex-col gap-4 items-start w-full mx-auto">
//         <Breadcrumbs crumbs={crumbs} />
//         <article className="w-full flex flex-col gap-[3.5rem]">
//           <section className="flex flex-col gap-3.5">
//             <h1>
//               Designing organization and collaboration features for ChatGPT
//             </h1>
//             <p className="large">
//               From February to April 2025 , as a self-initiated project, I
//               designed intelligent organization and collaboration features that
//               transforms ChatGPT from a disposable chat tool into a persistent
//               knowledge platform.
//             </p>
//             <div className="w-full border rounded-[0.375rem]">
//               <Image
//                 src="/images/chatgpt/main.png"
//                 alt="ChatGPT main interface"
//                 width={1200}
//                 height={675}
//                 style={{ width: "100%", height: "auto" }}
//                 priority
//               />
//             </div>
//           </section>

//           <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Understanding the Problem</h2>
//                 <p className="large">
//                   After months of daily ChatGPT use, I noticed a growing
//                   problem: valuable conversations and ideas were getting lost in
//                   an unorganized list of chats. Finding something even from last
//                   week became frustrating. Collaborating with classmates made
//                   things worse; we had to share screenshots through email or
//                   whatsapp, with no way to work together in real time or build
//                   shared knowledge.
//                 </p>
//                 <p className="large">
//                   It became clear that while ChatGPT is great for creating
//                   content, it falls short in helping users manage, retrieve, and
//                   collaborate on it. I set out to see if others shared these
//                   struggles too.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Secondary Research</h2>
//                 <p className="large">
//                   Before diving into primary research, I explored the broader
//                   landscape through forums, Reddit, Twitter, and user community
//                   feedback. The same frustrations came up repeatedly: users
//                   struggled to organize chats, lost important conversations, and
//                   couldn’t collaborate effectively. Many resorted to workarounds
//                   sharing screenshots, copying content to external docs, or
//                   juggling multiple tools.
//                 </p>
//                 <p className="large">
//                   This secondary research confirmed that these weren’t isolated
//                   issues, but widespread problems worth solving.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>User Survey</h2>
//                 <p className="large">
//                   To quantify the problem and validate my observations, I
//                   conducted a targeted survey with 29 ChatGPT users, focusing
//                   specifically on chat usage, management behaviors, and
//                   collaboration patterns.
//                 </p>
//                 <div className="w-full">
//                   <Image
//                     src="/images/chatgpt/survey.png"
//                     alt="ChatGPT main interface"
//                     width={1200}
//                     height={675}
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>
//                 <p className="large">
//                   These numbers confirmed that problems were widespread,
//                   impactful, and interconnected.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>User Interview</h2>
//                 <p className="large">
//                   Following the survey, I conducted deeper interviews with 8
//                   users representing different demographics and use cases to
//                   gain richer insights into their specific challenges. Based on
//                   the user interviews, I created empathy maps to better
//                   understand users' emotional and cognitive states.
//                 </p>
//                 <div className="w-full">
//                   <Image
//                     src="/images/chatgpt/map.png"
//                     alt="ChatGPT main interface"
//                     width={1200}
//                     height={675}
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>
//                 <p className="large">
//                   These interviews revealed that users had developed inefficient
//                   workarounds for both organization and collaboration,
//                   suggesting the problems were both universal and costly in
//                   terms of productivity.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Persona</h2>
//                 <p className="large">
//                   Based on my research findings, I created a primary persona
//                   that represents the segment that relies heavily on ChatGPT.
//                 </p>
//                 <div className="w-full">
//                   <Image
//                     src="/images/chatgpt/persona.png"
//                     alt="ChatGPT main interface"
//                     width={1200}
//                     height={675}
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>User Journey Map</h2>
//                 <p className="large">
//                   Mapped the user's complete interaction cycle with ChatGPT to
//                   understand their end-to-end experience, emotions, and pain
//                   points at each stage. This revealed critical moments of
//                   frustration and identified specific opportunities where design
//                   interventions could improve the workflow and reduce user
//                   friction.
//                 </p>
//                 <div className="w-full">
//                   <Image
//                     src="/images/chatgpt/journey.png"
//                     alt="ChatGPT main interface"
//                     width={1200}
//                     height={675}
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Pain Points</h2>
//                 <p className="large">
//                   Based on my research, I identified three critical pain points:
//                 </p>
//                 <p className="large">
//                   → Users struggle to find past conversations because ChatGPT
//                   provides no organizational structure.
//                   <br />→ There's no way to save valuable prompts or responses
//                   for future use.
//                   <br />→ ChatGPT only allows sharing individual chats, making
//                   team collaboration difficult.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Problem & Goal</h2>
//                 <p className="large">
//                   To define the{" "}
//                   <span className="text-[#DC3C22] font-medium">problem</span>,
//                   users struggle to manage important chats and prompts leading
//                   to lost information, repeated work, and unnecessary friction.
//                 </p>
//                 <p className="large">
//                   And our{" "}
//                   <span className="text-[#06923E] font-medium">goal</span> is to
//                   make it easier for users to keep track of important chats and
//                   prompts by giving them better ways to organize and save the
//                   content that matters.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Solution Exploration</h2>
//                 <p className="large">
//                   To explore potential solutions, I developed "How Might We"
//                   questions to avoid rushing into design decisions prematurely
//                   and ensure I was thinking broadly about the problem space.
//                 </p>
//                 <p className="large">
//                   → How might we help users quickly locate valuable past
//                   conversations?
//                   <br />
//                   → How might we enable intuitive organization without adding
//                   complexity?
//                   <br />→ How might we facilitate easy prompt saving and reuse?
//                   <br />→ How might we enable seamless collaboration for teams?
//                 </p>
//                 <p className="large">
//                   These questions kept my design process focused and
//                   user-centered while exploring creative solutions.
//                 </p>
//                 <p className="large">
//                   I explored several approaches and also analyzed how
//                   competitors were handling chat organization. I looked at
//                   Google's{" "}
//                   <a
//                     href="https://gemini.google.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="link-underline"
//                   >
//                     Gemini
//                   </a>
//                   , X's (Twitter's){" "}
//                   <a
//                     href="https://grok.x.ai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="link-underline"
//                   >
//                     Grok
//                   </a>
//                   , Anthropic's{" "}
//                   <a
//                     href="https://claude.ai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="link-underline"
//                   >
//                     Claude
//                   </a>
//                   , and{" "}
//                   <a
//                     href="https://perplexity.ai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="link-underline"
//                   >
//                     Perplexity AI
//                   </a>{" "}
//                   to understand the current landscape.
//                 </p>
//                 <div className="w-full">
//                   <Image
//                     src="/images/chatgpt/others.png"
//                     alt="ChatGPT main interface"
//                     width={1200}
//                     height={675}
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>
//                 <p className="large">
//                   I explored several approaches and also analyzed how
//                   competitors were handling this problem. I looked at Google's
//                   Gemini, X's Grok, Anthropic's Claude, and Perplexity AI to
//                   understand the current competitive landscape.
//                 </p>
//                 <p className="large">
//                   At the time, Perplexity AI was the only competitor with their
//                   own solution for chat management called "Spaces."
//                   Additionally, none of these platforms had a solution for
//                   saving and reusing prompts, collaboration.
//                 </p>
//                 <p className="large">
//                   Based on this analysis, I developed three potential approaches
//                   for improving ChatGPT's organization:
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>User Flow</h2>
//                 <p className="large">
//                   I crafted a user flow illustrating the various paths users
//                   would take when navigating the new organization and
//                   collaboration features, highlighting key scenarios like
//                   creating and managing spaces, saving prompts, and
//                   collaborating with team members across their ChatGPT workflow.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Wireframe</h2>
//                 <p className="large">
//                   Here are some of the wireframes that provided us with the
//                   glimpse of how ChatGPT's organization and collaboration
//                   features could potentially work, with all the key
//                   functionalities implemented.
//                 </p>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Final Design</h2>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>User Testing and Results</h2>
//                 <p className="large">
//                   To validate the solution's effectiveness, I conducted user
//                   testing with the final design and prototype.
//                 </p>
//                 <ul className="large">
//                   <li>
//                     • 9 out of 10 users found the folder-based organization very
//                     intuitive and preferred it over the current linear chat
//                     list.
//                   </li>
//                   <li>
//                     • 8 out of 10 users successfully organized their
//                     conversations within 2 minutes without guidance,
//                     demonstrating the intuitive nature of the folder-based
//                     system.
//                   </li>
//                   <li>
//                     • Users immediately understood the collaborative spaces
//                     concept and expressed excitement about team features.
//                   </li>
//                   <li>
//                     • Participants successfully saved and retrieved prompts much
//                     faster than their current external tool workflows.
//                   </li>
//                   <li>
//                     • Users described the design as "clean," "familiar," and
//                     "feels like it belongs in ChatGPT."
//                   </li>
//                 </ul>
//               </section>
//               <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
//             </>
//           )}

//           {isAuthenticated && (
//             <>
//               <section className="flex flex-col gap-2.5">
//                 <h2>Learnings and Reflections</h2>
//                 <ul className="large">
//                   <li>
//                     The interview process was a huge confidence booster for
//                     me—getting the chance to talk with people gave me valuable
//                     experience in conducting user interviews. I learned how to
//                     make participants comfortable, ask the right follow-up
//                     questions, and observe non-verbal cues that often revealed
//                     more than what people explicitly said.
//                   </li>
//                   <li>
//                     Not ignoring the research phase was crucial—it helped me
//                     make informed decisions throughout the design process rather
//                     than relying on gut feelings. Having solid research backing
//                     gave me confidence in every design decision because I could
//                     always point back to specific user insights and data that
//                     supported my choices.
//                   </li>
//                   <li>
//                     It's important to include users in the ideation phase, not
//                     just during research—I realized that getting user
//                     perspectives during the design process itself can lead to
//                     better solutions. Rather than waiting until the end to
//                     validate designs, involving users throughout ideation allows
//                     for continuous iteration and ensures the final solution
//                     truly meets their needs along the way.
//                   </li>
//                 </ul>
//               </section>
//             </>
//           )}

//           {!isAuthenticated && (
//             <section className="flex flex-col gap-2 items-start w-full border-tertiary-color border-[0.063rem] rounded-lg p-6 bg-white shadow-inset-tertiary">
//               <div>
//                 <p className="large">
//                   Above is a brief overview of my work. Please enter the
//                   password to access the full case study.
//                 </p>
//                 <p className="text-secondary-color text-lg">
//                   If you don't have the password, feel free to shoot me an email{" "}
//                   <a
//                     href="mailto:rajatchandarana09@gmail.com"
//                     className="link-underline"
//                   >
//                     here
//                   </a>
//                 </p>
//               </div>
//               <form
//                 onSubmit={handlePasswordSubmit}
//                 className="flex flex-col gap-1 w-full"
//               >
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="border border-tertiary-color rounded p-1 w-full"
//                   placeholder="Password"
//                   autoComplete="off"
//                 />
//                 <Button type="submit" className="w-full">
//                   Submit
//                 </Button>
//                 {error && <span className="text-red-500">{error}</span>}
//               </form>
//             </section>
//           )}

//           <section>
//             <Footer />
//           </section>
//         </article>
//       </div>
//     </main>
//   );
// }

// export default function ChatGPT() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ChatGPTContent />
//     </Suspense>
//   );
// }
