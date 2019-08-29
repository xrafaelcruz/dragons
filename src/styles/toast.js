import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: ${props => (props.show ? '1' : '0')};
  position: fixed;
  transition: opacity 500ms;
  top: 0;
  width: 100%;
  z-index: ${props => (props.show ? '10' : '-1')};

  p {
    color: #fff;
    background: ${props => {
      if (props.status === 'success') {
        return '#7ca566';
      } else if (props.status === 'error') {
        return '#b55353';
      }
    }};
    border-radius: 4px;
    font-size: 16px;
    margin: 16px;
    padding: 8px 36px;
  }
`;
