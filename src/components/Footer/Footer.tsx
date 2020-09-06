import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Devto } from './Logos/DevtoLogo.svg';
import { ReactComponent as GitHub } from './Logos/GitHubLogo.svg';
import { ReactComponent as LinkedIn } from './Logos/LinkedInLogo.svg';
import { ReactComponent as Twitter } from './Logos/TwitterLogo.svg';
import { HeartIcon } from '../Icons';

const FooterStyles = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
  max-height: 100px;
  margin-top: 20px;

  .social-media {
    display: flex;
    justify-content: center;
  }

  .logo {
    list-style: none; 
    margin-right: 8px;

    a {
      display: block;
      height: 30px;
      text-decoration: none;
      width: 30px;
      color: ${({ theme: { fontDark }}) => fontDark};

      &:hover, 
      
      &:visited  {
        color: ${({ theme: { fontDark }}) => fontDark};
      }
  
    }
  }


  .credits {
    color: ${({theme: { fontDark }}) => fontDark};
    font-family: inherit;
    font-size: 0.8rem;
  }
`;

export function Footer () {
  const currentYear = new Date();
  return (
    <FooterStyles>
      <div className="social-media">
      <li className="logo">
        <a
          href="https://github.com/anyruizd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
      </li>
      <li className="logo">
        <a
          href="https://linkedin.com/in/anyruizd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </li>
    <li className="logo">
      <a
        href="https://dev.to/anyruizd"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Devto />
      </a>
    </li>
    <li className="logo">
        <a
          href="https://twitter.com/anyruizd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
      </li>
      </div>
      <p className="credits">{currentYear.getFullYear()} - Made with <HeartIcon /> by Any Ruiz</p>
    </FooterStyles>
  )
}