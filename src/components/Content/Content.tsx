import React from 'react';
import styled from 'styled-components';
import { SparklesIcon, WaveIcon } from '../Icons'

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
    a {
      color: inherit;
    }

    a:visited {
      color: inherit;
    }
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
        I'm a Front-End Developer based in Medellin, Colombia.
      </p> 
      <p className="position">
      <SparklesIcon /> Currently learning awesome stuff as a Software Engineer at <a href="https://www.skillshare.com/" rel="noopener noreferrer" target="_blank">Skillshare</a> <SparklesIcon />
      </p> 
    </ContentStyles>
  )
}