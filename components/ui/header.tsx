import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

interface HeaderMainProps {
  headerText: string;
  selectedButton: string;
  handleButtonClick: (buttonName: string) => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({
  headerText,
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
    window.open("/resume.pdf", "_blank");
  };

  return (
    <header className="w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-tiempos-headline text-[2rem] md:text-[2.5rem]">
          {headerText}
        </h1>
        <nav className="flex flex-row items-center gap-2">
          <Tabs defaultValue={selectedButton} onValueChange={handleTabChange}>
            <TabsList className="">
              <TabsTrigger value="home" className="text-[0.875rem]">
                HOME
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-[0.875rem]">
                WORK
              </TabsTrigger>
              <TabsTrigger value="about" className="text-[0.875rem]">
                ABOUT
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="">
            <div className="inline-flex items-center justify-center rounded-[0.375rem] bg-black p-[0.3125rem] sm:p-[0.375rem] lg:p-[0.4375rem] shadow-inset-tertiary">
              <button
                onClick={handleResumeClick}
                className="relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[0.875rem] sm:px-[1rem] lg:px-[1.25rem] pt-[0.33rem] pb-[0.305rem] sm:pt-[0.375rem] sm:pb-[0.35rem] lg:pt-[0.4375rem] lg:pb-[0.4rem] b_mono text-white transition-colors text-[0.875rem] hover:text-gray-300 focus-visible:outline-none"
              >
                RESUME
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
