import type { Profile } from "@app/utils";

export interface ActionBarProps {
  profile: Profile;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  dragState?: {
    isDragging: boolean;
    startX: number;
    currentX: number;
    currentY: number;
  };
}