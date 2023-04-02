import App from 'app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styled';
import { QueryClientProvider } from 'utils/react-query';
import { ThemeProvider } from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider>
      <GlobalStyle />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
