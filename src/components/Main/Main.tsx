import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { Content } from '../Content';

const MainStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export function Main() {
  return (
    <MainStyles>
      <Avatar />
      <Content />
    </MainStyles>
  );
}
