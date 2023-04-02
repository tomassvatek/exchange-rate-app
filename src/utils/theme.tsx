import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: 'rgb(92, 102, 123)',
    white: '#f3f3f3',
    border: '#ccc',
  },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
