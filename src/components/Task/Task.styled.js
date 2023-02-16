import styled from 'styled-components';

export const TaskField = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;
export const TaskTitle = styled.p`
  flex-grow: 1;
`;
export const TaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;

  &:hover {
    background-color: #e2e5e8;
  }
  &:active {
    background-color: #bdbdbd;
  }
`;
export const TaskCheck = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
