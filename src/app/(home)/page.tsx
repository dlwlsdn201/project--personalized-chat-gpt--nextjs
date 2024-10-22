'use client';

import { ChatInterfaceWidget } from '@/widgets/home';
import { HeaderText, SubText } from './home.styled';
import { PageContainer } from '../styles/common.styled';

const HomePage = () => {
  return (
    <PageContainer className="bg-background">
      <HeaderText>Your Personal AI Chat</HeaderText>
      <SubText>
        open AI의 개인 API 키를 입력하여 월 구독 요금제 대신 사용한 만큼만
        요금을 지불하여 chat GPT 서비스를 사용할 수 있습니다.
      </SubText>
      <ChatInterfaceWidget />
    </PageContainer>
  );
};

export default HomePage;
