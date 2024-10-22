import styled from 'styled-components';
import { TextArea } from '@radix-ui/themes';
// Styled Components
export const Container = styled.div`
  width: 100%;
  background-color: #0d0d0f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChatWrapper = styled.div`
  background-color: #1a1a1d;
  padding: 1.25rem;
  border-radius: 12px;
  width: 80%;
  margin-top: 40px;
`;

export const ChatInput = styled.div`
  display: flex;
  gap: 0.5rem;
  border: 1px solid #b0b0b0;
  border-radius: 1rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f23;
  height: 10rem;
`;

export const InputField = styled(TextArea)`
  flex-grow: 1;
  background: #1f1f23;
  height: 100%;
  border: 2px solid green;
  color: white;
  /* outline: none; */
  width: 100%;
  margin-right: 0.5rem;

  &:focus {
    forced-color-adjust: none;
  }
`;

export const SendButton = styled.button`
  background-color: #e84a5f;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatBubble = styled.div<{ $isUser: boolean }>`
  background-color: ${(props) => (props.$isUser ? '#e84a5f' : '#1f1f23')};
  padding: 12px 16px;
  border-radius: 16px;
  color: white;
  max-width: 300px;
  align-self: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 16px;
`;

export const ChatTime = styled.div<{ $isUser: boolean }>`
  font-size: 12px;
  color: #9b9b9b;
  margin-top: 4px;
  align-self: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.div`
  background-color: #333;
  padding: 8px;
  border-radius: 50%;
  margin-right: 8px;
`;
