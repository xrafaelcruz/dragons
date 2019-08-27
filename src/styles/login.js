import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;

  img {
    margin: 0 40px 0 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    img {
      margin: 0 0 40px;
    }
  }
`;
