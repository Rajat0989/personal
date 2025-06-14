import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation constants for consistent timing and easing
const STAGGER_ANIMATION = {
  DURATION: 0.5,
  EASING: [0.21, 0.47, 0.32, 0.98],
} as const;

interface StaggerWrapperProps {
  children: ReactNode;
  skipAnimation?: boolean;
  index?: number;
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
  className?: string;
}

export const StaggerWrapper = ({
  children,
  skipAnimation = false,
  initial,
  animate,
  transition = {
    duration: STAGGER_ANIMATION.DURATION,
    ease: STAGGER_ANIMATION.EASING,
  },
  className = "",
}: StaggerWrapperProps) => {
  if (skipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`${className} transform-gpu`}
      initial={initial}
      animate={animate}
      transition={transition}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {children}
    </motion.div>
  );
};
