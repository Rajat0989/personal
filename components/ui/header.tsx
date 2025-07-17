import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

interface HeaderMainProps {
  selectedButton: string;
  handleButtonClick: (buttonName: string) => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({
  selectedButton,
  handleButtonClick,
}) => {
  const router = useRouter();

  const handleTabChange = (value: string) => {
    handleButtonClick(value);
    // Handle navigation for specific tabs
    switch (value) {
      case "projects":
        router.push("/archive");
        break;
      case "about":
        router.push("/about");
        break;
    }
  };

  const handleResumeClick = () => {
    window.open("/others/resume.pdf", "_blank");
  };

  return (
    <header className="w-full flex flex-col gap-4">
      <h1 className="text-[3.5rem] font-prata">
        Hey, I'm <span className="italic">Rajat</span>
      </h1>
      <nav className="w-full flex justify-between items-center gap-0">
        <Tabs defaultValue={selectedButton} onValueChange={handleTabChange}>
          <TabsList className="">
            <TabsTrigger value="home" className="px-[1rem] py-[0.4rem]">
              HOME
            </TabsTrigger>
            <TabsTrigger value="projects" className="px-[1rem] py-[0.4rem]">
              WORK
            </TabsTrigger>
            <TabsTrigger value="about" className="px-[1rem] py-[0.4rem]">
              ABOUT
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="">
          <div className="inline-flex items-center justify-center rounded-[0.375rem] p-[0.35rem] bg-black shadow-inset-tertiary">
            <button
              onClick={handleResumeClick}
              className="relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[1rem] py-[0.3rem] font-azeret-mono text-white transition-colors hover:text-gray-300"
            >
              RESUME
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMain;
