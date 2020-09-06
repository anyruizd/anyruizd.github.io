import React from 'react';
import styled from 'styled-components';
import { MoonIcon, SunIcon } from '../Icons';

const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 20px;

  button {
    background-color: transparent;
    border: none;
    color: ${({theme: { element }}) => element};
    cursor: pointer;
    height: 30px;
    width: 30px;

    &:focus {
      outline: none;
    }
  }
`;

interface Props {
  handleClick: () => void,
  themeName: string
}

export function Header ({ handleClick, themeName }: Props) {
  return (
    <HeaderStyles>
      <button onClick={handleClick}>
         {themeName === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </HeaderStyles>
  );
}