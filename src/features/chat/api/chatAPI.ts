import { ChatInput, ChatResponse } from '../model/useChatAPI';

// fetchChatResponse 함수의 타입 정의
export const fetchChatResponse = async (
  input: ChatInput
): Promise<ChatResponse> => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch response');
  }

  const data = await res.json();
  return { data: data.choices[0].text.trim() }; // ChatResponse 형식으로 반환
};
