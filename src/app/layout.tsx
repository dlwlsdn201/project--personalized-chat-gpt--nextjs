import { GlobalStyle } from '@/shared/styles/GlobalStyle';
import { Navigation } from '@shared/ui';
import { Theme } from '@radix-ui/themes';
import '@shared/styles/globals.css';
import '@radix-ui/themes/styles.css';

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
        <Theme>
          <header style={{ width: '100%' }}>
            <Navigation />
          </header>
          <aside></aside>
          <div
            id="container"
            style={{
              display: 'flex',
              height: '100%',
              flexFlow: 'column nowrap',
            }}
          >
            <GlobalStyle />
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
