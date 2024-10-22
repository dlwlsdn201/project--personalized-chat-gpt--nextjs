'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    @apply bg-gray-100 text-gray-900;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;
