"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Local components
import { Button } from "@/components/ui/button";

// Static assets
import ArrowLeftIcon from "@/public/images/icons/arrow-left.svg";
import ChevronRightIcon from "@/public/images/icons/chevron-right.svg";

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

      // If we're still on the same page after a short delay, use the backTo route
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
    <section className="flex items-center gap-[0.25rem] w-full">
      <Button
        onClick={handleBack}
        className="flex items-center gap-[0.25rem] pl-[0.5rem]"
      >
        <ArrowLeftIcon className="w-3 h-3" />
        BACK
      </Button>
      {displayCrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <ChevronRightIcon className="w-3 h-3 text-tertiary-color" />
          <Button
            variant={
              index === displayCrumbs.length - 1 ? "selected" : "default"
            }
            className={
              index === displayCrumbs.length - 1 ? "shadow-inset-tertiary" : ""
            }
            onClick={() => crumb.href && router.push(crumb.href)}
          >
            {crumb.label}
          </Button>
        </React.Fragment>
      ))}
      <div className="flex-grow ml-[0.25rem] mt-[0.625rem]">
        <div className="h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
