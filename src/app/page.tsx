import { ChatWindow } from '../features/chat/ui';
import { UserProfile } from '../entities/user/ui';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <UserProfile />
      <ChatWindow />
    </div>
  );
}
