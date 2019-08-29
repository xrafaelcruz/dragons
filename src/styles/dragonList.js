import styled from 'styled-components';

import borderSprite from 'assets/borderSprite.png';
import borderTopBg from 'assets/border-top-bg.jpg';
import borderBg from 'assets/border-bg.png';

export default styled.div`
  margin: 16px 0 80px;
  max-width: 900px;
  padding: 24px 0;
  position: relative;
  width: 100%;

  ul {
    background: transparent url(${borderBg});
    background-repeat: repeat-y;
    background-position: 50% 0;
    background-size: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 32px 64px;
    position: relative;
    z-index: 1;
  }

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    height: auto;
    margin: 32px auto;
    width: 70px;
  }
`;

export const BorderTop = styled.div`
  &::after {
    background: transparent url(${borderSprite}) no-repeat 50% -148px;
    background-position: 50% 0;
    background-size: 100%;
    content: ' ';
    height: 75px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
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
  }
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
  }
`;

export const Footer = styled.footer`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 0 0 5px 5px;
  flex: 1;
  padding: 15px 20px;
  text-align: left;
  width: 100%;

  strong {
    color: #333;
    font-size: 16px;
    font-family: 'MedievalSharp', cursive;
  }

  p {
    color: #999;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
    font-family: 'MedievalSharp', cursive;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
  width: 100%;
`;
