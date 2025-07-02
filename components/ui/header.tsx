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
        <h1 className="hidden sm:block font-tiempos-headline text-[2rem] md:text-[2.5rem]">
          {headerText}
        </h1>
        <nav className="flex flex-row items-center gap-2">
          <Tabs defaultValue={selectedButton} onValueChange={handleTabChange}>
            <TabsList className="">
              <TabsTrigger
                value="home"
                className="text-[1rem] px-[1.1rem] py-[0.5rem] sm:text-[0.875rem] sm:px-[1rem] sm:py-[0.375rem]"
              >
                HOME
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="text-[1rem] px-[1.1rem] py-[0.5rem] sm:text-[0.875rem] sm:px-[1rem] sm:py-[0.375rem]"
              >
                WORK
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="text-[1rem] px-[1.1rem] py-[0.5rem] sm:text-[0.875rem] sm:px-[1rem] sm:py-[0.375rem]"
              >
                ABOUT
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="">
            <div className="inline-flex items-center justify-center rounded-[0.375rem] bg-black p-[0.375rem] sm:p-[0.375rem] lg:p-[0.4375rem] shadow-inset-tertiary">
              <button
                onClick={handleResumeClick}
                className="relative inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[1.1rem] py-[0.5rem] text-[1rem] sm:px-[1rem] sm:py-[0.375rem] sm:text-[0.875rem] lg:px-[1.25rem] lg:py-[0.4375rem] b_mono text-white transition-colors hover:text-gray-300"
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
