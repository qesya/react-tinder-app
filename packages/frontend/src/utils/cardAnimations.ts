import type { DragState } from "@app/types";

export const cardAnimations = {
  getTransform: (dragState: DragState, isVisible: boolean, maxRotation = 30) => {
    const { currentX, currentY, isDragging } = dragState;
    const rotation = (currentX / 400) * maxRotation;
    const scale = isDragging ? 0.98 : 1;

    return `
      translateX(${currentX}px) 
      translateY(${currentY}px) 
      rotate(${rotation}deg)
      scale(${scale})
      ${!isVisible ? 'translateY(10px)' : ''}
    `;
  },

  getOpacity: (dragState: DragState, isVisible: boolean) => {
    if (!isVisible) return 0;
    if (!dragState.isDragging) return 1;
    return Math.max(0.8, 1 - Math.abs(dragState.currentX) / 500);
  },

  getSwipeIndicatorOpacity: (currentX: number, threshold: number) => {
    if (Math.abs(currentX) < 60) return 0;
    return Math.min(Math.abs(currentX) / threshold, 0.9);
  }
};
