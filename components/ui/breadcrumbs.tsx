"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Local components
import { Button } from "@/components/ui/button";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  fromAllWorks?: boolean;
  backTo?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  crumbs,
  fromAllWorks = false,
  backTo = "/",
}) => {
  const router = useRouter();

  const allWorksCrumb: Crumb = { label: "ALL WORKS", href: "/all-works" };
  const displayCrumbs = fromAllWorks ? [allWorksCrumb, ...crumbs] : crumbs;

  const handleBack = () => {
    try {
      const currentPath = window.location.pathname;
      window.history.back();

      setTimeout(() => {
        if (document.location.pathname === currentPath) {
          router.push(backTo);
        }
      }, 100);
    } catch {
      router.push(backTo);
    }
  };

  return (
    <section className="flex items-center gap-[0.25rem] w-full py-3">
      <Button
        onClick={handleBack}
        className="commit-mono flex items-center gap-[0.25rem] pl-[0.5rem]"
      >
        <ArrowLeft className="w-5 h-5" />
        BACK
      </Button>
      {displayCrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <Button
            variant={
              index === displayCrumbs.length - 1 ? "selected" : "default"
            }
            className={`commit-mono ${
              index === displayCrumbs.length - 1 ? "shadow-inset-tertiary" : ""
            }`}
            onClick={() => crumb.href && router.push(crumb.href)}
          >
            {crumb.label}
          </Button>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Breadcrumbs;
