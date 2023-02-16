import styled from 'styled-components';

export const FormField = styled.form`
  display: flex;
  gap: 4px;
`;
export const InputField = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;
  &:focus {
    outline-color: #1976d2;
  }
`;
