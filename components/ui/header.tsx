"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { value: "home", label: "HOME", href: "/" },
  { value: "projects", label: "WORK", href: "/archive" },
  { value: "about", label: "ABOUT", href: "/about" },
] as const;

function getActiveTab(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/archive") return "projects";
  if (pathname.startsWith("/about")) return "about";
  return "home";
}

export default function HeaderMain() {
  const pathname = usePathname();
  const activeTab = getActiveTab(pathname ?? "/");

  return (
    <header className="w-full flex flex-col gap-4">
      <section className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary-color rounded"
        >
          <h1 className="text-[2.5rem] font-tiempos-headline font-light text-secondary-color">
            <span className="inline">Rajat</span>{" "}
            <span className="hidden lg:inline">Chandarana</span>
          </h1>
        </Link>
        <nav className="flex justify-between items-center gap-4">
          <div className="inline-flex items-center justify-center rounded-[0.375rem] bg-fill p-[0.3rem] shadow-inset-tertiary">
            {navItems.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <Link
                  key={item.value}
                  href={item.href}
                  role="tab"
                  aria-selected={isActive}
                  data-state={isActive ? "active" : "inactive"}
                  className={cn(
                    "relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[1rem] py-[0.4rem] font-azeret-mono text-[1rem] transition-colors",
                    "text-secondary-color hover:text-primary-color focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary-color",
                    isActive && "text-primary-color bg-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="">
            <div className="inline-flex items-center justify-center rounded-[0.375rem] p-[0.35rem] bg-black shadow-inset-tertiary">
              <a
                href="/others/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[1rem] py-[0.3rem] font-azeret-mono text-white transition-colors hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                RESUME
              </a>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
