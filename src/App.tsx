import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';
import { Header } from './components/Header';

const Normalize = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  background-color: ${COLORS.darkBackground};
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Fragment>
      <Normalize />
      <AppWrapper>
        <Header />
      </AppWrapper>
    </Fragment>
  );
}

export default App;
