import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { themes } from './context/themeContext';

type Theme = 'light' | 'dark'

const GlobalStyles = createGlobalStyle<{theme: typeof themes.light}>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: 'Inconsolata', monospace;
    font-size: 16px;
    background-color: ${props => props.theme.background};
  }
`;

const AppWrapper = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={themes[theme]}>
      <Fragment>
        <GlobalStyles />
        <AppWrapper>
          <Header theme={theme} handleClick={toggleTheme} />
          <Main />
          <Footer />
          </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
