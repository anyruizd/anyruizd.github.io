import React from 'react';
import styled from 'styled-components';
import { SparklesIcon, WaveIcon } from '../Icons'
import { BREAKPOINTS } from '../../constants';

const ContentStyles = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;

  .title {
    font-size: clamp(30px, 1.5rem + 2vw, 64px);
    margin-bottom: 20px;
  }

  .description {
    font-size: clamp(20px, 1rem + 2vw, 30px);
    font-weight: 300;
    margin-bottom: 20px;
  }

  .position {
    font-size: clamp(15px, 1rem + 2vw, 20px);
    font-weight: 300;

    &-link {
      color: inherit;
    }

    &-link:visited {
      color: inherit;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    max-width: 60vw;
  }
`;
const greeting = 'Hey, this is Any!';
const intro = 'I\'m a latina Frontend Developer based in Montréal, Canada.';
const description = ' Currently learning awesome stuff at LaSalle College and looking for new and exciting challenges as a Fullstack Developer ';

export function Content () {
  return (
    <ContentStyles className="content">
      <h1 className="title">
          {greeting}
          <WaveIcon />
      </h1>
      <p className="description">{intro}</p> 
      <p className="position">
      <SparklesIcon />{ description } <SparklesIcon />
      </p> 
    </ContentStyles>
  )
}