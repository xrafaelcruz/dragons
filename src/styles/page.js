import styled from 'styled-components';

export default styled.div`
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  display: flex;
  height: 100%;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;
