import React from 'react';
import styled from 'styled-components';
import { SparklesIcon, WaveIcon } from '../Icons'
import { BREAKPOINTS } from '../../constants';

const positionURL = 'https://www.skillshare.com/';

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

export function Content () {
  return (
    <ContentStyles className="content">
      <h1 className="title">
        Hey, I'm Any!
          <WaveIcon />
      </h1>
      <p className="description">
        I'm a Front-End Developer based in Medellín, Colombia.
      </p> 
      <p className="position">
      <SparklesIcon /> Currently learning awesome stuff as a Software Engineer at <a className="position-link" href={positionURL} rel="noopener noreferrer" target="_blank">Skillshare</a> <SparklesIcon />
      </p> 
    </ContentStyles>
  )
}