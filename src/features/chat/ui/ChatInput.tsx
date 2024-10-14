'use client';

import { FormEvent, useState } from 'react';
import { useChatStore } from '../model/useChatStore';

export const ChatInput = () => {
  const [input, setInput] = useState<string>('');
  const { addMessage } = useChatStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input) return;

    addMessage({ role: 'user', content: input });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l-md"
        placeholder="Ask your question..."
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
        Send
      </button>
    </form>
  );
};
