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
`;

export function Main() {
  return (
    <MainStyles>
      <Avatar />
      <Content />
    </MainStyles>
  );
}
