import { useMutation, UseMutationResult } from '@tanstack/react-query'; // '@tanstack/react-query'에서 useMutation을 가져옵니다.
import { useChatStore } from './useChatStore';
import { fetchChatResponse } from '../api/chatAPI';

// ChatResponse와 ChatInput의 타입 정의
export type ChatResponse = {
  data: string; // API로부터 반환되는 응답 데이터의 타입
};

export type ChatInput = {
  input: string; // API 호출에 전달되는 입력 데이터의 타입
};

// useChatAPI 함수 정의
export const useChatAPI = (): UseMutationResult<
  ChatResponse,
  Error,
  ChatInput,
  unknown
> => {
  const { addMessage } = useChatStore();

  return useMutation({
    mutationFn: async (variables: ChatInput): Promise<ChatResponse> => {
      const response = await fetchChatResponse(variables);
      return response; // 반환 타입이 ChatResponse임을 보장
    },
    onSuccess: (response: ChatResponse) => {
      addMessage({ role: 'assistant', content: response.data });
    },
  });
};
