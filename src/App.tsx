import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

const AppWrapper = styled.div`
  background-color: rgba(248, 211, 42, 0.3);
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const AppContent = styled.div`
  align-items: center;
  background-color: rgb(226, 149, 25);
  border-radius: 5%;
  cursor: pointer;
  display: flex;
  height: 250px;
  justify-content: center;
  margin: 30vh auto;
  transition: transform 0.5s;
  width: 250px;

  &:hover {
    transform: scale(1.1);
  }

  & p {
    color: white;
    font-family: Helvetica, sans-serif;
    font-size: 24px;
    text-align: center;
  }
`;

function App() {
  return (
    <Fragment>
      <Normalize />
      <AppWrapper>
        <AppContent>
          <p>
            <span role="img" aria-label="sparkles">
              ✨
            </span>
            Any's site is under construction
            <span role="img" aria-label="sparkles">
              ✨
            </span>
          </p>
        </AppContent>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
