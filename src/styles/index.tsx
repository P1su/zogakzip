import { ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

interface StylesProps {
  children: ReactNode;
}

const Styles = ({ children }: StylesProps) => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Styles;