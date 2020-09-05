import React from 'react';
import styled from 'styled-components';

import photoOfAny from '../../assets/images/anyruizd.jpg';
import { COLORS } from '../../constants';

const AvatarStyles = styled.div`
  border-radius: 50%;
  border: 4px dotted ${COLORS.Element};
  width: 240px;
  height: 240px;
  overflow: hidden;
  
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export function Avatar () {
  return (
    <AvatarStyles className="headshot">
      <img src={photoOfAny} alt="Any's headshot" />
    </AvatarStyles>
  )
}