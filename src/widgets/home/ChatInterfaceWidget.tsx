'use client';

import { PaperPlaneIcon } from '@radix-ui/react-icons';
import {
  Container,
  ChatWrapper,
  ChatHeader,
  IconWrapper,
  ChatBubble,
  ChatTime,
  ChatInput,
  InputField,
  SendButton,
} from './ChatInterface.styled';
import { ApiKeyInputWidget } from './ApiKeyInputWidget';

export const ChatInterfaceWidget = () => {
  return (
    <Container>
      <ApiKeyInputWidget />
      {/* Chat UI */}
      <ChatWrapper>
        <ChatHeader>
          <IconWrapper>{/* <FaRegCommentDots color="#fff" /> */}</IconWrapper>
          <div>Hey Emon...</div>
        </ChatHeader>

        <ChatBubble $isUser={false}>
          Hey, I wanted to know about your experience on UI/UX part.
        </ChatBubble>
        <ChatTime $isUser={false}>6:30 PM</ChatTime>

        <ChatBubble $isUser={true}>Yeah, Fine. What about you?</ChatBubble>
        <ChatTime $isUser={false}>6:30 PM</ChatTime>

        <ChatBubble $isUser={true}>
          Yes, I have experience of 3+ years on UI/UX.
        </ChatBubble>
        <ChatTime $isUser={false}>6:33 PM</ChatTime>

        {/* Chat input */}
        <ChatInput>
          {/* <TextField.Root
            placeholder="Write a message..."
            style={{ width: '100%' }}
          > */}
          <InputField style={{ color: 'white' }} />
          {/* <InputField></InputField> */}
          {/* </TextField.Root> */}
          <SendButton>
            <PaperPlaneIcon />
          </SendButton>
        </ChatInput>
      </ChatWrapper>
    </Container>
  );
};
