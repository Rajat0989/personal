"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

function JiogamesContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chatgpt_jio_games_access");
      if (stored === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "JIOGAMES" }]
    : [{ label: "JIOGAMES" }];

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.trim() === "RAM") {
      setIsAuthenticated(true);
      setError("");
      if (typeof window !== "undefined") {
        localStorage.setItem("chatgpt_jio_games_access", "true");
      }
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <main className="page-container page-container-default project-page">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />
        <article className="w-full flex flex-col gap-8">
          <section className="flex flex-col gap-3.5">
            <h1>
              Redesigning JioGames Cloud Platform
            </h1>
            <p className="large">
              From May to July 2025 , as a self-initiated project, I redesigned
              JioGames Cloud Platform to Improve User Retention.
            </p>
          </section>

          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Understanding the Problem</h2>
                <p className="large">
                  During my personal observations of JioGames Cloud, I found
                  that while the platform offers impressive technical
                  capabilities such as streaming console-quality games to any
                  device, the user interface creates unnecessary barriers to
                  game discovery, engagement, and overall satisfaction.
                </p>
                <p className="large">
                  The usability issues on JioGames Cloud weren't limited to
                  individual pages but spanned the entire user journey. From
                  landing on the homepage to searching for a game, users faced
                  confusing layouts, unclear structure, and inconsistent design.
                  Despite offering cutting-edge cloud gaming, the platform
                  struggled with fundamental UX flaws that could hinder user
                  retention and growth.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Research</h2>
                <p className="large">
                  Before diving into detailed analysis, I conducted extensive
                  secondary research to understand the cloud gaming landscape
                  and user expectations in this space.
                </p>
                <p className="large">
                  I analyzed competitor platforms including{" "}
                  <a
                    href="https://www.xbox.com/en-US/play"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Xbox Cloud Gaming
                  </a>
                  ,{" "}
                  <a
                    href="https://www.nvidia.com/en-us/geforce-now/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    NVIDIA GeForce Now
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.amazon.com/luna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Amazon Luna Cloud
                  </a>{" "}
                  to understand industry standards for game discovery,
                  subscription models, and user interface patterns.
                </p>
                <p className="large">
                  This research established a clear benchmark for what JioGames
                  Cloud needed to achieve to compete effectively in the cloud
                  gaming market.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>Heuristic Evaluation</h2>
                <p className="large">
                  I conducted a comprehensive heuristic evaluation using
                  Nielsen's 10 usability heuristics across seven key sections:
                  Homepage and category sections, Game detail pages, Game
                  listing and filtering, Subscription and pricing pages, User
                  account and profile areas, Search and discovery features, and
                  Overall information architecture.
                </p>
                <div className="w-full">
                  <Image
                    src="/images/jiogames/landing.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="/images/jiogames/category.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="/images/jiogames/games.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="/images/jiogames/plans.png"
                    alt="ChatGPT main interface"
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
                <p className="large">
                  This systematic approach ensured that I wasn't just
                  identifying surface-level problems but understanding the
                  underlying UX principles that were being violated and how they
                  impact user behavior.
                </p>
              </section>
              <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
            </>
          )}

          {isAuthenticated && (
            <>
              <section className="flex flex-col gap-2.5">
                <h2>More coming soon.......</h2>
              </section>
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

export default function JioGames() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JiogamesContent />
    </Suspense>
  );
}
