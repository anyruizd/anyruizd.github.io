import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap";

import { COLORS } from '../../constants';

const ContentStyles = styled.section`
  color: ${COLORS.Text};
  display: flex;
  flex-direction: column;
  padding: 40px;


  .title {
    font-size: clamp(30px, 1.5rem + 2vw, 64px);
    margin-bottom: 20px;

    svg {
      height: clamp(16px, calc(16px + 2vw), 40px);
      margin-left: 10px;
      width: clamp(16px, calc(16px + 2vw), 40px);
    }
  }

  .description {
    font-size: clamp(20px, 1rem + 2vw, 30px);
    margin-bottom: 20px;
  }

  .position {
    font-size: clamp(15px, 1rem + 2vw, 20px);
    a {
      color: inherit;
    }
  }
`;

export function Content () {
  const waveRef = useRef(null);
  
  useEffect(() => {
    TweenMax.to(
      waveRef.current,
      0.5,
      {
        ease: "power2.inOut",
        rotate: "35deg",
        yoyo: true,
        repeat: -1
      }
    );
  }, [])

  return (
    <ContentStyles className="content">
      <h1 className="title">
        Hey, I'm Any!
          <svg ref={waveRef} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.861 9.14699C5.801 8.48999 7.218 8.61599 8.062 9.31299L7.094 7.90599C6.315 6.79499 6.594 5.59299 7.706 4.81299C8.818 4.03599 11.969 6.12499 11.969 6.12499C11.183 5.00299 11.33 3.58099 12.452 2.79399C13.574 2.00999 15.122 2.28099 15.908 3.40499L26.328 18.125L25 31L13.917 26.958L4.25 12.625C3.457 11.496 3.731 9.93899 4.861 9.14699Z"
              fill="#B78B60" />
            <path
              d="M2.69497 17.336C2.69497 17.336 1.56297 15.686 3.21397 14.555C4.86297 13.424 5.99397 15.073 5.99397 15.073L11.245 22.731C11.426 22.429 11.624 22.131 11.845 21.837L4.55697 11.21C4.55697 11.21 3.42597 9.56096 5.07597 8.42996C6.72497 7.29896 7.85597 8.94796 7.85597 8.94796L14.711 18.945C14.966 18.737 15.227 18.528 15.496 18.323L7.54897 6.73196C7.54897 6.73196 6.41797 5.08296 8.06797 3.95196C9.71697 2.82096 10.848 4.46996 10.848 4.46996L18.795 16.059C19.087 15.88 19.376 15.725 19.666 15.561L12.238 4.72896C12.238 4.72896 11.107 3.07996 12.756 1.94896C14.405 0.817958 15.536 2.46696 15.536 2.46696L23.39 13.921L24.584 15.663C19.636 19.057 19.165 25.442 21.992 29.565C22.557 30.39 23.382 29.825 23.382 29.825C19.989 24.876 21.025 19.315 25.974 15.922L24.515 8.61996C24.515 8.61996 23.97 6.69596 25.893 6.14996C27.817 5.60496 28.363 7.52896 28.363 7.52896L30.048 12.533C30.716 14.517 31.427 16.494 32.368 18.364C35.025 23.644 33.438 30.206 28.428 33.643C22.963 37.39 15.492 35.997 11.744 30.533L2.69497 17.336Z"
              fill="#D4AB88" />
            <path
              d="M12 32.042C8.00001 32.042 3.95801 28 3.95801 24C3.95801 23.447 3.55301 23 3.00001 23C2.44701 23 1.95801 23.447 1.95801 24C1.95801 30 6.00001 34.042 12 34.042C12.553 34.042 13 33.553 13 33C13 32.447 12.553 32.042 12 32.042Z"
              fill="#555557" />
            <path
              d="M7 34C4 34 2 32 2 29C2 28.447 1.553 28 1 28C0.447 28 0 28.447 0 29C0 33 3 36 7 36C7.553 36 8 35.553 8 35C8 34.447 7.553 34 7 34ZM24 2C23.448 2 23 2.448 23 3C23 3.552 23.448 4 24 4C28 4 32 7.589 32 12C32 12.552 32.448 13 33 13C33.552 13 34 12.552 34 12C34 6.486 30 2 24 2Z"
              fill="#555557" />
            <path
              d="M29 0.0419922C28.448 0.0419922 28 0.447992 28 0.999992C28 1.55199 28.448 2.04199 29 2.04199C32 2.04199 33.958 4.26699 33.958 6.99999C33.958 7.55199 34.447 7.99999 35 7.99999C35.553 7.99999 35.958 7.55199 35.958 6.99999C35.958 3.16299 33 0.0419922 29 0.0419922Z"
              fill="#555557" />
          </svg>
      </h1>
      <p className="description">
        I'm a Front-End Developer based in Medellin, Colombia.
      </p> 
      <p className="position">
      <span role="img" aria-label="sparkles">✨</span>Learning awesome stuff as a Software Engineer at <a href="https://www.skillshare.com/" rel="noopener noreferrer" target="_blank">Skillshare</a><span role="img" aria-label="sparkles">✨</span>
      </p> 
    </ContentStyles>
  )
}