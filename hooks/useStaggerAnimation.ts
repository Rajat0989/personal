import { useCallback } from "react";

// Animation constants for consistent timing and easing
export const ANIMATION = {
  DURATION: 0.5,
  BASE_DELAY: 0.08,
  EASING: [0.21, 0.47, 0.32, 0.98] as const, // Custom easing curve for smooth animation
  Y_OFFSET: 8, // Reduced from 12 for subtler movement
} as const;

export const useStaggerAnimation = ({ baseDelay = ANIMATION.BASE_DELAY }) => {
  const getTransition = (index: number) => ({
    initial: { opacity: 0, y: ANIMATION.Y_OFFSET },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: ANIMATION.DURATION,
      delay: index * baseDelay,
      ease: [...ANIMATION.EASING], // Spread to create a mutable array
    },
  });

  return { getTransition };
};
