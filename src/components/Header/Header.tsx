import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from '../ToggleButton';

const HeaderStyles = styled.header`
  width: 100%;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export function Header() {
  return (
    <HeaderStyles>
      <ToggleButton />
    </HeaderStyles>
  );
}
