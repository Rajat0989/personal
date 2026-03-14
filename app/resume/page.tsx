"use client";

import React from "react";

import Footer from "@/components/ui/footer";
import HeaderMain from "@/components/ui/header";

export default function ResumePage() {
  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-[2.5rem] items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain />
        </section>

        <section className="w-full flex flex-col gap-3">
          <h2 className="text-secondary-color font-tiempos-text font-light text-[3rem]">
            Resume
          </h2>
          <p className="font-azeret-mono tracking-tighter">
            Coming soon.
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}

