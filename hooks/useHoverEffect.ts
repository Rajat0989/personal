import { useState, useCallback } from 'react';

export function useHoverEffect() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredItem(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  return { hoveredItem, handleMouseEnter, handleMouseLeave };
}