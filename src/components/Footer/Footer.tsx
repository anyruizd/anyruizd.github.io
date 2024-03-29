import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';
import { HeartIcon } from '../Icons';
import { ReactComponent as GitHub } from './Logos/GitHubLogo.svg';
import { ReactComponent as LinkedIn } from './Logos/LinkedInLogo.svg';

const FooterStyles = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
  margin-top: 20px;
  max-height: 100px;
  transition: color 0.5;

  .social-media {
    display: flex;
    justify-content: center;
  }

  .logo {
    list-style: none; 
    margin-right: 8px;

    .social-link {
      color: ${({ theme: { fontDark }}) => fontDark};
      display: block;
      height: 30px;
      text-decoration: none;
      transition: color 0.5;
      width: 30px;

      &:hover {
        color: ${({ theme: { fontColor }}) => fontColor};
      }
      
      &:visited  {
        color: ${({ theme: { fontDark }}) => fontDark};
      }
  
    }
  }

  .credits {
    align-items: center;
    color: ${({theme: { fontDark }}) => fontDark};
    display: flex;
    font-family: inherit;
    font-size: 0.8rem;
  }

  .copy-left {
    display: inline-block;
    font-size: 1rem;
    line-height: 1rem;
    transform: translateY(1px) rotate(180deg) ;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-left: 10vw;
    margin-right: 10vw;

    .credits {
      font-size: 1rem;
    }

    .copy-left {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
`;

export function Footer () {
  const currentYear = new Date();
  return (
    <FooterStyles>
      <div className="social-media">
      <li className="logo">
        <a className="social-link"
          href="https://github.com/anyruizd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
      </li>
      <li className="logo">
        <a className="social-link"
          href="https://linkedin.com/in/anyruizd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </li>
      </div>
      <pre className="credits"><span className="copy-left"> ©</span>{currentYear.getFullYear()} - Made with <HeartIcon /> by Any Ruiz</pre>
    </FooterStyles>
  )
}