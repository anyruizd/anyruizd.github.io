import React from 'react';
import styled from 'styled-components';
import photoOfAny from '../../assets/anyruizd.jpg';
import { BREAKPOINTS } from '../../constants';

const AvatarStyles = styled.div`
  border-radius: 50%;
  border: 4px dotted ${props => props.theme.element};
  width: 240px;
  height: 240px;
  overflow: hidden;
  
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.laptop}) {
    width: 340px;
    height: 340px;
  }
`;

export function Avatar () {
  return (
    <AvatarStyles className="headshot">
      <img src={photoOfAny} alt="Any's headshot" />
    </AvatarStyles>
  )
}