"use client";

import React, { useEffect, useState } from "react";
import Link, { type LinkProps } from "next/link";
import Image from "next/image";

import type { Project } from "@/lib/data/projectData";

interface ProjectCardProps {
  project: Project;
  href: LinkProps["href"];
}

export default function ProjectCard({
  project,
  href,
}: ProjectCardProps) {
  const isComingSoon = project.status === "comingSoon";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gridCols = 26;
  const gridRows = 15;
  const squaresCount = gridCols * gridRows;

  const seeded = (n: number) => {
    // deterministic pseudo-random in [0, 1)
    const x = Math.sin(n * 999.123) * 10000;
    return x - Math.floor(x);
  };

  return (
    <Link href={href} className="flex flex-col gap-2 w-full group">
      <div className="w-full relative aspect-[3/2] overflow-hidden border border-tertiary-color">
        <Image
          src={project.svgSrc}
          alt={project.projectName}
          fill
          className="object-cover transition-opacity group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {isComingSoon && mounted && (
          <div
            className="absolute inset-0 z-10 grid place-items-center pointer-events-none bg-primary-color-dark/10"
            aria-hidden="true"
          >
            <div
              className="absolute -inset-[0.5px] grid leading-none"
              style={{
                backgroundColor: "rgba(58, 154, 255, 0.08)",
                gridTemplateColumns: `repeat(${gridCols}, ${100 / gridCols}%)`,
                gridTemplateRows: `repeat(${gridRows}, ${100 / gridRows}%)`,
                gap: 0,
              }}
            >
              {Array.from({ length: squaresCount }).map((_, i) => {
                const r = Math.floor(i / gridCols);
                const c = i % gridCols;
                const fromTopLeft = r + c; // origin bias
                  const r1 = seeded(i + 11);
                  const r2 = seeded(i + 97);
                  const r3 = seeded(i + 503);

                  // Use integer ms values to avoid any server/client float rounding mismatches.
                  const jitterMs = Math.floor(seeded(i + 7) * 2600); // 0..2599
                  const delayMs = fromTopLeft * 18 + jitterMs;

                  const durationMs = Math.floor(1600 + r1 * 2600); // 1600..4199
                  const lo = 0.005 + r2 * 0.025; // 0.005..0.030
                  const hi = 0.4 + r3 * 0.45; // 0.40..0.85
                  const phaseMs = delayMs % durationMs;

                return (
                  <div
                    key={i}
                    className="block w-full h-full animate-project-build-square"
                    style={{
                      backgroundColor: "rgba(58, 154, 255, 0.22)",
                      // Negative delay makes animation appear "already running" on first paint
                        animationDelay: `${-phaseMs}ms`,
                        animationDuration: `${durationMs}ms`,
                      ["--lo" as never]: lo.toFixed(3),
                      ["--hi" as never]: hi.toFixed(3),
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full flex-row items-baseline justify-between gap-4">
        <p className="min-w-0 flex-1 text-left font-tiempos-text text-md font-light text-secondary-color-dark">
          {project.title ?? ""}
        </p>
        <p className="shrink-0 text-right text-md font-light text-tertiary-color-dark uppercase tracking-tight whitespace-nowrap">
          {project.type ? `${project.date} · ${project.type}` : project.date}
        </p>
      </div>
    </Link>
  );
}

