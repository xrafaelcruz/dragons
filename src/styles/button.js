import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background: #e68122;
    transition: all 250ms;
  }

  &:active {
    opacity: 1;
    background: #e68122;
    transition: all 250ms;
  }
`;

export default styled.button`
  ${buttonStyles}
  background: #34332c;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  margin-top: 10px;
`;

export const ButtonMedium = styled.button`
  ${buttonStyles}
  background: ${props => (props.color ? props.color : '#fff')};
  color: ${props => (props.color ? '#fff' : '#333')};
  font-size: 12px;
  padding: 5px;
  width: 100%;
`;
