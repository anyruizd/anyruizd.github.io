import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const Toggle = styled.div`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 28px;
  justify-content: space-around;
  padding-right: 20px;
  width: 36px;

  .line {
    background-color: ${COLORS.darkElement};
    border-radius: 2px;
    height: 4px;
    width: 80px;

    &-top {
      width: 36px;
    }

    &-mid {
      width: 22px;
    }

    &-bottom {
      width: 30px;
    }
  }
`;

export function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toggle
      onClick={() => setIsOpen(!isOpen)}
      className={`toggle-container ${isOpen ? 'menu-open' : 'menu-closed'}`}
    >
      <span className="line line-top"></span>
      <span className="line line-mid"></span>
      <span className="line line-bottom"></span>
    </Toggle>
  );
}
