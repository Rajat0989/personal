import React from "react";
import { cn } from "@/lib/utils";

interface HoverEffectWrapperProps {
  id: string;
  hoveredItem: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// Animation constants for consistent timing and easing
const HOVER_ANIMATION = {
  DURATION: 0.3,
  EASING: [0.21, 0.47, 0.32, 0.98],
  OPACITY: {
    ACTIVE: 1,
    INACTIVE: 0.4,
  },
} as const;

const HoverEffectWrapper: React.FC<HoverEffectWrapperProps> = React.memo(
  function HoverEffectWrapper({
    id,
    hoveredItem,
    onMouseEnter,
    onMouseLeave,
    className,
    children,
    onClick,
  }) {
    // Memoize the event handlers to prevent recreating on every render
    const handleMouseEnter = React.useCallback(() => {
      onMouseEnter(id);
    }, [id, onMouseEnter]);

    // Optimize class computation
    const combinedClassName = React.useMemo(
      () =>
        cn(
          "transition-all transform-gpu",
          hoveredItem && hoveredItem !== id
            ? `opacity-[${HOVER_ANIMATION.OPACITY.INACTIVE}]`
            : `opacity-[${HOVER_ANIMATION.OPACITY.ACTIVE}]`,
          className
        ),
      [hoveredItem, id, className]
    );

    return (
      <div
        className={combinedClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{
          willChange: "opacity, transform",
          backfaceVisibility: "hidden",
          transitionDuration: `${HOVER_ANIMATION.DURATION * 1000}ms`,
          transitionTimingFunction: `cubic-bezier(${HOVER_ANIMATION.EASING.join(",")})`,
        }}
      >
        {children}
      </div>
    );
  }
);

HoverEffectWrapper.displayName = "HoverEffectWrapper";

export { HoverEffectWrapper };
