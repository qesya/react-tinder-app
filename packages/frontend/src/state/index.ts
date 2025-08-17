import { create } from 'zustand';
import type { Profile } from '../utils/types';
import { MatchService, ProfileService } from '@app/services';

interface ProfilesState {
  queue: Profile[];
  isLoading: boolean;
  fetchMore: () => Promise<void>;
  popNext: () => void;
}

interface ActionsState {
  matchOpen: boolean;
  like: (id: string) => Promise<void>;
  dislike: (id: string) => Promise<void>;
  closeMatch: () => void;
}

export const useProfilesStore = create<ProfilesState>((set, get) => ({
  queue: [],
  isLoading: false,

  fetchMore: async () => {
    if (get().isLoading) return;

    set({ isLoading: true });

    try {
      const data = await ProfileService.fetchProfiles(10);
      set(state => ({
        queue: [...state.queue, ...data.data],
        isLoading: false
      }));
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
      set({ isLoading: false });
    }
  },

  popNext: () => {
    const state = get();
    const [, ...rest] = state.queue;
    set({ queue: rest });

    if (rest.length <= 3) {
      state.fetchMore();
    }
  }
}));

export const useActionsStore = create<ActionsState>((set) => ({
  matchOpen: false,

  like: async (id: string) => {
    try {
      const data = await MatchService.likeProfile(id);
      if (data.isMatch) {
        set({ matchOpen: true });
      }
    } catch (error) {
      console.error('Failed to like profile:', error);
    }
  },

  dislike: async (id: string) => {
    try {
      await MatchService.dislikeProfile(id);
    } catch (error) {
      console.error('Failed to dislike profile:', error);
    }
  },

  closeMatch: () => set({ matchOpen: false })
}));
