import styled from 'styled-components';

export const FormInputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  padding-top: 10px;
`;

export const Select = styled.select`
  height: 30px;
  width: 175px;
  text-align: center;
`;

export const TextBox = styled.input`
  margin-top: 5px;
  height: 20px;
`;

export const ErrorBox = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  flex-basis: 100%;
  height: 0;
`;
export const ErrorInfo = styled.label`
  color: red;
`;
