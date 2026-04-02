"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  value: string;
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { value: "home", label: "HOME", href: "/" },
  { value: "projects", label: "ARCHIVE", href: "/archive" },
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
        <Link href="/">
          <h1 className="hidden sm:block text-[2.5rem] font-tiempos-text font-light">
            <span className="inline">Rajat</span>{" "}
            <span className="hidden md:inline">Chandarana</span>
          </h1>
        </Link>
        <nav className="flex justify-between items-center gap-4">
          <LayoutGroup>
            <div className="inline-flex items-center justify-center rounded-[0.375rem] bg-primary-color p-[0.3rem]">
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
                      "relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[1rem] py-[0.4rem] font-azeret-mono text-[1rem]",
                      "text-secondary-color-dark hover:text-primary-color-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary-color",
                      isActive && "text-primary-color hover:text-primary-color",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="header-tabs-bubble"
                        className="absolute inset-[0.0625rem] z-0 bg-primary-color-dark rounded-[0.25rem]"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-10 transition-colors duration-500 ease-out">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>
        </nav>
      </section>
    </header>
  );
}
