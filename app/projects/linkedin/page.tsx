"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Local components
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";

function LinkedinContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "LINKEDIN" }]
    : [{ label: "LINKEDIN" }];

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

          <section>
            <Footer />
          </section>
        </article>
      </div>
    </main>
  );
}

export default function Linkedin() {
  return (
    <Suspense fallback={null}>
      <LinkedinContent />
    </Suspense>
  );
}
