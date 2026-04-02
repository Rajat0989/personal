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
  backTo?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  crumbs,
  backTo = "/",
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(backTo);
  };

  return (
    <section className="flex items-center gap-[0.25rem] w-full py-3">
      <Button
        type="button"
        onClick={handleBack}
        className="font-azeret-mono flex items-center gap-[0.25rem] pl-[0.5rem]"
      >
        <ArrowLeft className="w-5 h-5"/>
        BACK
      </Button>
      {crumbs.map((crumb, index) => (
        <Button
          key={crumb.href ?? crumb.label}
          type="button"
          variant={
            index === crumbs.length - 1 ? "selected" : "default"
          }
          className={`font-azeret-mono cursor-default ${
            index === crumbs.length - 1 ? "shadow-inset-tertiary" : ""
          }`}
          onClick={() => crumb.href && router.push(crumb.href)}
        >
          {crumb.label}
        </Button>
      ))}
    </section>
  );
};

export default Breadcrumbs;
