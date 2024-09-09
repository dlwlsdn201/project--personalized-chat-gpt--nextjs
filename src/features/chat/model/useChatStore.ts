import { create } from 'zustand';

export interface ChatStoreProps {
  messages: { role: string; content: React.ReactNode }[];
  addMessage: (arg: {
    role: 'assistant' | 'user';
    content: React.ReactNode;
  }) => void;
}

export const useChatStore = create<ChatStoreProps>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
