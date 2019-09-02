import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    opacity: 0.8;
    background: #e68122;
  }

  &:active {
    opacity: 1;
    background: #e68122;
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

export const ButtonLink = styled.button`
  background: transparent;
  border: 0;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  transition: all 250ms;

  &:hover {
    color: #e68122;
    opacity: 0.8;
  }

  &:active {
    color: #e68122;
    opacity: 1;
  }
`;
