import styled from 'styled-components';

export default styled.div`
  align-items: ${props => (props.x ? props.x : 'flex-start')};
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 60px);
  justify-content: ${props => (props.y ? props.y : 'flex-start')};
`;
