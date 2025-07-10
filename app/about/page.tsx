// "use client";

// import React, { Suspense, useState } from "react";
// import { useRouter } from "next/navigation";

// // Local components
// import Breadcrumbs from "@/components/ui/breadcrumbs";
// import Footer from "@/components/ui/footer";
// import HeaderMain from "@/components/ui/header";

// // Local utilities and hooks
// import { useStaggerAnimation, ANIMATION } from "@/hooks/useStaggerAnimation";

// function AboutContent() {
//   const router = useRouter();
//   const { getTransition } = useStaggerAnimation({
//     baseDelay: ANIMATION.BASE_DELAY,
//   });
//   const crumbs = [{ label: "ABOUT ME" }];
//   const [selectedButton, setSelectedButton] = useState<string>("about");
//   const [headerText, setHeaderText] = useState("Hey, I'm Rajat.");

//   const handleButtonClick = (buttonName: string) => {
//     setSelectedButton(buttonName);
//     switch (buttonName) {
//       case "home":
//         router.push("/");
//         break;
//       case "projects":
//         router.push("/archive");
//         break;
//     }
//   };

//   return (
//     <main className="page-container page-container-default">
//       <div className="flex flex-col gap-2 items-center w-full">
//         <section className="flex flex-col gap-2 w-full">
//           <HeaderMain
//             headerText={headerText}
//             selectedButton={selectedButton}
//             handleButtonClick={handleButtonClick}
//           />
//         </section>

//         <div className="flex flex-col gap-4 items-start w-full mx-auto">
//           <Breadcrumbs crumbs={crumbs} />

//           <article className="w-full flex flex-col gap-[5rem]">
//             {/* Content removed */}
//           </article>

//           <Footer />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default function About() {
//   return (
//     <Suspense fallback={null}>
//       <AboutContent />
//     </Suspense>
//   );
// }
