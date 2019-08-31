import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'MedievalSharp', cursive;
  color: #000;
  margin: 64px 0 32px;
  text-align: center;
  width: 100%;

  @media (max-width: 1080px) {
    margin: 48px 0 32px;
  }

  @media (max-width: 540px) {
    margin: 32px 0;
  }
`;

export const H2 = styled.h2`
  font-family: 'MedievalSharp', cursive;
  color: #000;
  margin: 16px 0;
  text-align: center;
`;
