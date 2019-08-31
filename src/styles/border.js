import styled from 'styled-components';

import borderSprite from 'assets/images/borderSprite.png';
import borderTopBg from 'assets/images/border-top-bg.jpg';
import borderBg from 'assets/images/border-bg.png';

export default styled.div`
  margin: 16px auto 80px;
  max-width: 900px;
  padding: 24px 0;
  position: relative;
  width: 100%;

  @media (max-width: 1080px) {
    margin: 0 auto 40px;
    max-width: 500px;
    padding: 15px 0;
  }

  @media (max-width: 540px) {
    margin: 0 auto 20px;
    max-width: 300px;
    padding: 8px 0;
  }
`;

export const BorderTop = styled.div`
  &::after {
    background: transparent url(${borderSprite}) no-repeat 50% -148px;
    background-position: 50% 0;
    background-size: 100%;
    content: ' ';
    height: 65px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    @media (max-width: 540px) {
      height: 30px;
    }
  }

  &::before {
    background: transparent url(${borderTopBg}) no-repeat 50% 0;
    content: ' ';
    height: 80px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 93%;
    z-index: 2;

    @media (max-width: 1080px) {
      height: 55px;
    }

    @media (max-width: 540px) {
      height: 20px;
    }
  }
`;

export const Background = styled.div`
  background: transparent url(${borderBg});
  background-repeat: repeat-y;
  background-position: 50% 0;
  background-size: 100%;
  position: relative;
  z-index: 1;
`;

export const BorderBottom = styled.div`
  &::after {
    background: transparent url(${borderSprite}) no-repeat 50% -284px;
    background-size: 100%;
    bottom: -40px;
    content: ' ';
    height: 74px;
    left: 0;
    position: absolute;
    width: 100%;

    @media (max-width: 1080px) {
      background: transparent url(${borderSprite}) no-repeat 50% -170px;
      background-size: 100%;
    }

    @media (max-width: 540px) {
      background: transparent url(${borderSprite}) no-repeat 50% -70px;
      background-size: 100%;
    }
  }
`;
