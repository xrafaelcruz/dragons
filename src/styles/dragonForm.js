import styled from 'styled-components';

export default styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  padding: 85px 32px 30px;
  width: 100%;

  @media (max-width: 1080px) {
    padding: 60px 32px 50px;
  }

  @media (max-width: 540px) {
    padding: 40px 32px 20px;
  }
`;
