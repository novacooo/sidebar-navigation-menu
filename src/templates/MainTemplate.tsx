import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme';

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;
