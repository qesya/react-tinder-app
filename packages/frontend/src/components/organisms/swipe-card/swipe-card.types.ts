import type { DragState } from "@app/types";
import type { Profile } from "@app/utils";

export interface SwipeCardProps {
  profile: Profile;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  disabled?: boolean;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  dragState: DragState;
  setDragState: (state: DragState) => void;
}