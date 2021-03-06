import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  font-size: 16px;
  height: 48px;
  padding: 0 20px;
`;

export const Label = styled.label`
  color: #666;
  font-family: 'MedievalSharp', cursive;
  font-size: 16px;
  margin: 10px 0 5px;
`;

export const LabelError = styled.label`
  color: #b55353;
  font-family: 'MedievalSharp', cursive;
  font-size: 14px;
  margin: 5px 0 0;
`;
