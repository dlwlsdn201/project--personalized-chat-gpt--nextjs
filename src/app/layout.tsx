import { GlobalStyle } from '@/shared/styles/GlobalStyle';
import { Navigation } from '@shared/ui';
import '@shared/styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ width: '100%' }}>
          <Navigation />
        </header>
        <div
          id="container"
          style={{ display: 'flex', height: '100%', flexFlow: 'column nowrap' }}
        >
          <GlobalStyle />
          {children}
        </div>
      </body>
    </html>
  );
}