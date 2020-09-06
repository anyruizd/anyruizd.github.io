import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { themes } from './themes/defaultTheme';

type Theme = 'light' | 'dark'

const GlobalStyles = createGlobalStyle<{theme: typeof themes.light}>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    background-color: ${({ theme: { background }}) => background};
    color: ${({ theme: { fontColor }}) => fontColor};
    font-family: 'Inconsolata', monospace;
    font-size: 16px;
    min-height: 100vh;
    transition: background-color 0.5s, color 0.5s;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Fragment>
        <GlobalStyles />
        <AppWrapper>
          <Header themeName={theme} handleClick={toggleTheme} />
          <Main />
          <Footer />
          </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
