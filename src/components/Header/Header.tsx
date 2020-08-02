import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from '../ToggleButton';

const HeaderStyles = styled.header`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  width: 100%;
`;

export function Header() {
  return (
    <HeaderStyles>
      <ToggleButton />
    </HeaderStyles>
  );
}
