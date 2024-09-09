'use client';

import { useChatStore } from '../model/useChatStore';
import { ChatInput } from './ChatInput';

export const ChatWindow = () => {
  const { messages } = useChatStore();

  return (
    <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-md">
      <div className="h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="p-2">
            <span
              className={
                message.role === 'user' ? 'text-blue-600' : 'text-green-600'
              }
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
